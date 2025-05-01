import { PaymentCallbackData } from '@/@types/yookassa';
import { db } from '@/db';
import { orders } from '@/db/schema';
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

    await db.update(orders).set({
      status: isSucceeded ? 'PAID' : 'CANCELLED',
    });
  } catch (error) {
    console.log('[Checkout Callback] Error:', error);
    return NextResponse.json({ error: 'Server error' });
  }
}
