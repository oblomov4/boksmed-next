import React from 'react';

export const PaymentInfo: React.FC = () => {
  return (
    <>
      <section className="payment">
        <div className="container">
          <div className="payment__first">
            <div className="payment__first-box payment__first-box--blue">
              <p className="payment__first-text">
                Мы осуществляем отгрузку медицинского оборудования и комплектующих по всей России
              </p>
            </div>

            <div className="payment__first-box">
              <p className="payment__first-text">
                Доставка и самовывоз осуществляются при условии 100% предоплаты счета.
              </p>
            </div>

            <div className="payment__first-box">
              <p className="payment__first-text">
                Оплата подтверждается при поступлении денежных средств на р/с Поставщика.
              </p>
            </div>
          </div>

          <div className="payment__two">
            <div className="payment__two-box payment__two-box--one">
              <p className="payment__two-text">
                Наша компания работает как с физическими, так и с юридическими лицами по
                безналичному расчету.
              </p>
            </div>

            <div className="payment__two-box payment__two-box--two">
              <p className="payment__two-text">
                Для бюджетных организаций предусмотрена отсрочка платежа до 30 дней
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
