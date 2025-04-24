import { BreadCrumps, Documents, PaymentInfo } from '@/shared/components';

export default function PaymentPage() {
  return (
    <>
      <BreadCrumps
        links={[
          {
            id: 0,
            text: 'Главная',
            link: '/',
          },
          {
            id: 1,
            text: 'Опалата',
            link: '/payment',
          },
        ]}
      />

      <h2 className="title">Оплата заказа</h2>
      <PaymentInfo />
      <Documents />
    </>
  );
}
