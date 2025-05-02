import { ItemsType } from '@/app/(main)/profile/orders/page';
import { db } from '@/db';
import { OrderTable } from '@/shared/components';

export default async function OrderListUserAdminPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const getParams = await params;

  const { id } = getParams;
  const orders = await db.query.orders.findFirst({
    where: (orders, { eq }) => eq(orders.id, id),
  });

  return (
    <>
      <h2 className="title">Заказ № {id}</h2>

      {(orders?.items as Array<ItemsType>).map((item, index) => (
        <OrderTable
          key={item.id}
          imageUrl={item.products.imageUrl!}
          title={item.products.title}
          number={index + 1}
          totalAmount={item.products.price}
          quantity={item.quantity}
          trackCode={orders!.trackCode}
        />
      ))}
    </>
  );
}
