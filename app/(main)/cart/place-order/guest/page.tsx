import { AnonForm, BreadCrumps, FormWrapper } from '@/shared/components';

export default function OrderGuestPage() {
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
            link: '/cart/place-order',
          },
          {
            id: 3,
            text: 'Оформить заказ',
            link: '/cart/place-order/guest',
          },
        ]}
      />

      <section className="place-order-anonym">
        <div className="container">
          <FormWrapper border title="Оформить заказ как гость" imgUrl="/images/anon-order.png">
            <AnonForm />
          </FormWrapper>
        </div>
      </section>
    </>
  );
}
