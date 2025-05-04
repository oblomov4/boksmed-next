import { ItemsType } from '@/app/(main)/profile/orders/page';
import { db } from '@/db';
import { OrderTable } from '@/shared/components';

export default async function UserOrdersPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const orders = await db.query.orders.findMany({
    where: (orders, { eq }) => eq(orders.userId, id),
  });

  return (
    <section className="orders">
      <div className="container">
        <h2 className="title">Заказы Пользователя</h2>
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
  );
}
