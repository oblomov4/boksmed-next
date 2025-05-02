import { db } from '@/db';
import { cartsItems } from '@/db/schema';
import { updateCartTotalAmount } from '@/shared/lib/update-cart-total-amount';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const data = (await req.json()) as { quantity: number };
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' });
    }

    const cartItem = await db.query.cartsItems.findFirst({
      where: (cartsItems, { eq }) => eq(cartsItems.id, id),
    });

    if (!cartItem) {
      return NextResponse.json({ error: 'Cart item not found' });
    }

    await db.update(cartsItems).set({ quantity: data.quantity }).where(eq(cartsItems.id, id));

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log('[CART_PATCH] Server error', error);
    return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' });
    }

    const cartItem = await db.query.cartsItems.findFirst({
      where: (cartsItems, { eq }) => eq(cartsItems.id, Number(id)),
    });

    if (!cartItem) {
      return NextResponse.json({ error: 'Cart item not found' });
    }

    // await prisma.cartItem.delete({
    //   where: {
    //     id: Number(params.id),
    //   },
    // });

    await db.delete(cartsItems).where(eq(cartsItems.id, Number(id)));

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log('[CART_DELETE] Server error', error);
    return NextResponse.json({ message: 'Не удалось удалить корзину' }, { status: 500 });
  }
}
