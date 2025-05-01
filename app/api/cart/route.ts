import { db } from '@/db';
import { cartsItems } from '@/db/schema';
import { findOrCreateCart } from '@/shared/lib/find-or-create-cart';
import { updateCartTotalAmount } from '@/shared/lib/update-cart-total-amount';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await db.query.carts.findFirst({
      where: (carts, { eq }) => eq(carts.token, token),
      with: {
        cartsItems: {
          orderBy: (cartItems, { desc }) => [desc(cartItems.createdAt)],
          with: {
            products: true,
          },
        },
      },
    });

    return NextResponse.json(userCart);
  } catch (error) {
    console.log('[CART_GET] Server error', error);
    return NextResponse.json({ message: 'Не удалось получить корзину' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = await req.json();

    const findCartItem = await db.query.cartsItems.findFirst({
      where: (cartsItem, { eq, and }) =>
        and(eq(cartsItem.cartId, userCart.id), eq(cartsItem.productId, data.id)),
    });

    if (findCartItem) {
      await db
        .update(cartsItems)
        .set({ quantity: (findCartItem.quantity || 0) + 1 })
        .where(eq(cartsItems.id, findCartItem.id));
    } else {
      await db.insert(cartsItems).values({
        cartId: userCart.id,
        productId: data.id,
        quantity: 1,
      });
    }

    const updatedUserCart = await updateCartTotalAmount(token);

    const resp = NextResponse.json(updatedUserCart);
    resp.cookies.set('cartToken', token);
    return resp;
  } catch (error) {
    console.log('[CART_POST] Server error', error);
    return NextResponse.json({ message: 'Не удалось создать корзину' }, { status: 500 });
  }
}
