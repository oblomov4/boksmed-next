import { PaymentCallbackData } from '@/@types/yookassa';
import { ItemsType } from '@/app/(main)/profile/orders/page';
import { db } from '@/db';
import { futureReviews, orders, products } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PaymentCallbackData;

    const order = await db.query.orders.findFirst({
      where: (orders, { eq }) => eq(orders.id, Number(body.object.metadata.order_id)),
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' });
    }

    const isSucceeded = body.object.status === 'succeeded';

    await db
      .update(orders)
      .set({
        status: isSucceeded ? 'PAID' : 'CANCELLED',
      })
      .where(eq(orders.id, order.id));

    if (isSucceeded) {
      for (let i = 0; i < (order.items as Array<ItemsType>).length; i++) {
        const elem = (order.items as Array<ItemsType>)[i];
        const productId = (order.items as Array<ItemsType>)[i].productId;
        const findProduct = await db.query.products.findFirst({
          where: (products, { eq }) => eq(products.id, productId),
        });

        if (!findProduct) {
          throw new Error();
        }

        const newQuantity = findProduct.quantity - elem.quantity;

        const isVisible = newQuantity >= 1;

        if (isVisible) {
          await db
            .update(products)
            .set({
              quantity: newQuantity,
            })
            .where(eq(products.id, productId));
        } else {
          await db
            .update(products)
            .set({
              quantity: 0,
              visible: false,
            })
            .where(eq(products.id, productId));
        }
      }

      await db.insert(futureReviews).values({ userId: Number(order.userId), ordersId: order.id });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('[Checkout Callback] Error:', error);
    return NextResponse.json({ error: 'Server error' });
  }
}
