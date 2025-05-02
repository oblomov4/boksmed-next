import { auth } from '@/auth';
import { db } from '@/db';
import { SelectProductTable } from '@/db/schema';
import { BreadCrumps, OrderTable } from '@/shared/components';
import { redirect } from 'next/navigation';

export type ItemsType = {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  products: SelectProductTable;
};

export default async function OrdersPage() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  const orders = await db.query.orders.findMany({
    where: (orders, { eq }) => eq(orders.userId, Number(session.user.id)),
  });

  return (
    <>
      <BreadCrumps
        links={[
          {
            id: 0,
            text: 'Гланая',
            link: '/',
          },
          {
            id: 1,
            text: 'Личный кабинет',
            link: '/profile',
          },
          {
            id: 2,
            text: 'Заказы',
            link: '/profile/orders',
          },
        ]}
      />

      <section className="orders">
        <div className="container">
          <h2 className="title">Заказы</h2>
          {orders.length > 0 ? (
            <div className="table-background">
              {orders.map((item, index) => (
                <OrderTable
                  key={item.id}
                  imageUrl={(item.items as Array<ItemsType>)[0].products.imageUrl!}
                  title={(item.items as Array<ItemsType>)[0].products.title}
                  number={index + 1}
                  totalAmount={(item.items as Array<ItemsType>)[0].products.price}
                  quantity={(item.items as Array<ItemsType>)[0].quantity}
                  trackCode={item.trackCode}
                />
              ))}
            </div>
          ) : (
            'У вас нет заказов'
          )}
        </div>
      </section>
    </>
  );
}
