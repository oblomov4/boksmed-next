import { db } from '@/db';
import { AdminOrderListTable } from '@/shared/components';

export default async function OrderListPageAdmin() {
  const orders = await db.query.orders.findMany({
    with: {
      users: true,
    },
  });

  return (
    <>
      <h2 className="title main-content-title">Список Заказов</h2>

      {orders.length > 0
        ? orders.map((item) => (
            <AdminOrderListTable
              key={item.id}
              id={item.id}
              userName={item.users?.name + ' ' + item.users?.lastName}
              date={item.createdAt!}
              totalAmount={item.totalAmount}
              adress={item.address}
              number={item.users?.phone as string}
              adminStatus={item.adminStatus}
              defaultTrackCode={item.trackCode}
            />
          ))
        : 'Заказов пока нет'}
    </>
  );
}
