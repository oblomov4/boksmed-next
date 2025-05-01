import { db } from '@/db';
import { SelectOrdersCallTable } from '@/db/schema';
import { OrderCallItem } from '@/shared/components';

export default async function OrderCallAdminPage() {
  const ordersCall: SelectOrdersCallTable[] | undefined = await db.query.ordersCall.findMany();

  return (
    <>
      <h2 className="title main-content-title">Список вопросов</h2>

      {ordersCall &&
        ordersCall.map((item) => (
          <OrderCallItem
            key={item.id}
            name={item.name}
            phone={item.phone}
            message={item.message}
            id={item.id}
          />
        ))}
    </>
  );
}
