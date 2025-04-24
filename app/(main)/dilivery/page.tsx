import { BreadCrumps, CalculateComponent, FormWrapper, MapComponent } from '@/shared/components';
import Image from 'next/image';

export default function DiliveryPage() {
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
            text: 'Доставка',
            link: '/dilivery',
          },
        ]}
      />

      <div className="dilivery">
        <div className="container">
          <h2 className="title">Доставка заказа</h2>
          <div className="dilivery__title-box">
            <Image width={33} height={33} src="images/dilivery1.svg" alt="dilivery" />
            <p className="dilivery__title">
              Самовывоз со склада по адресу: УР, г. Ижевск, ул. Пушкинская 290.
            </p>
          </div>
          <MapComponent />

          <div className="dilivery__title-box">
            <Image width={38} height={38} src="images/dilivery2.svg" alt="dilivery2" />
            <p className="dilivery__title">Доставка ведущими Транспортными компаниями</p>
          </div>
          <p className="dilivery__text">
            Мы осуществляем доставку любыми транспортными компаниями: Деловые Линии, СДЭК, ПЭК, по
            установленным тарифам на перевозки. При необходимости осуществляем индивидуальную
            доставку через другие службы доставки.
          </p>

          <FormWrapper title="Онлайн-калькулятор стоимости доставки">
            <CalculateComponent />
          </FormWrapper>
        </div>
      </div>
    </>
  );
}
