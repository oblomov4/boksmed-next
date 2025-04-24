import { AuthPlaceOrderWrapper, BreadCrumps } from "@/shared/components";


export default function PlaceOrderPage() {
  // Если аунтификации нету
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
            text: 'Корзина',
            link: '/cart',
          },
          {
            id: 2,
            text: 'Оформить заказ',
            link: '/place-order',
          },
        ]}
      />

      <section className="place-order">
        <div className="container">
          <AuthPlaceOrderWrapper />
        </div>
      </section>
    </>
  );
}
