import { db } from '@/db';
import { carts, SelectCartsTable } from '@/db/schema';

export const findOrCreateCart = async (token: string) => {
  let userCart: SelectCartsTable | undefined = await db.query.carts.findFirst({
    where: (carts, { eq }) => eq(carts.token, token),
  });

  if (!userCart) {
    [userCart] = await db.insert(carts).values({ token: token }).returning();
  }

  return userCart;
};
