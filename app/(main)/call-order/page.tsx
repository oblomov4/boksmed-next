import { BreadCrumps, CallOrderForm, FormWrapper } from '@/shared/components';

export default function CardOrderPage() {
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
            text: 'Обратный звонок',
            link: '/call-order',
          },
        ]}
      />
      ;
      <section className="order-call">
        <div className="container">
          <FormWrapper
            title="Заказать обратный звонок"
            description="Оставьте свои контакты - наш специалист свяжется с Вами в рабочее время."
            underFormText="Нажимая на кнопку «Отправить», я соглашаюсь с условиями."
            imgUrl="../images/order-call.png">
            <CallOrderForm />
          </FormWrapper>
        </div>
      </section>
    </>
  );
}
