import { AdminOrderList } from '@/shared/components';

export default function OrdersPage() {
  return (
    <>
      <h2 className="title main-content-title">Список заказов</h2>

      <div className="table-background">
        <AdminOrderList info={true} />
        <AdminOrderList info={false} />
        <AdminOrderList info={false} />
        <AdminOrderList info={false} />
        <AdminOrderList info={false} />
      </div>
    </>
  );
}
