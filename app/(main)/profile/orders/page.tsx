import { BreadCrumps, OrderItemWrapper } from '@/shared/components';

export default function OrdersPage() {
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
          <div className="table-background">
            <OrderItemWrapper />
          </div>
        </div>
      </section>
    </>
  );
}
