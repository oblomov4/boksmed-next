import { db } from '@/db';
import { carts } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const updateCartTotalAmount = async (token: string) => {
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

  if (!userCart) {
    return;
  }

  const totalAmount = userCart.cartsItems.reduce(
    (accum, sum) => accum + sum.products!.price * sum.quantity!,
    0,
  );

  await db.update(carts).set({ totalAmount: totalAmount }).where(eq(carts.id, userCart.id));

  userCart.totalAmount = totalAmount;

  return userCart;
};
