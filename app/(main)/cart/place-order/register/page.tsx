import { BreadCrumps, FormWrapper } from '@/shared/components';
import { RegisterForm } from '@/shared/components/register-form';

export default function OrderRegisterPage() {
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
            id: 4,
            text: 'Оформить заказ',
            link: '/cart/place-order/register',
          },
        ]}
      />

      <section className="place-order-anonym">
        <div className="container">
          <FormWrapper border title="Создать учетную запись" imgUrl="/images/order-register.png">
            <RegisterForm />
          </FormWrapper>
        </div>
      </section>
    </>
  );
}
