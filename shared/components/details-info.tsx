import React from 'react';

export const DetailsInfo: React.FC = () => {
  return (
    <section className="details">
      <div className="container">
        <div className="details__inner">
          <div className="details__box details__box--one">
            <p className="details__box-text">ИП Богатырёв Константин Сергеевич</p>
          </div>

          <div className="details__box details__box--two">
            <p className="details__box-text">
              Адрес регистрации: 426000, Удмуртская Респ, г. Ижевск
            </p>
          </div>

          <div className="details__box details__box--three">
            <p className="details__box-text">ИНН 183112400380</p>
          </div>

          <div className="details__box details__box--four">
            <p className="details__box-text">8 (3412) 65-08-77</p>
          </div>

          <div className="details__box details__box--five">
            <p className="details__box-text">ОГРНИП 311183116700040</p>
          </div>

          <div className="details__box details__box--six">
            <p className="details__box-text">
              Почтовый адрес: 426011 <br />
              г. Ижевск, ул. Пушкинская, 290
            </p>
          </div>

          <div className="details__box details__box--seven">
            <p className="details__box-text">+7 982 993 90 05</p>
          </div>
        </div>

        <div className="details__bottom">
          <p className="details__bottom-email">E-mail: 5078096@mail.ru</p>
          <p className="details__bottom-dilivery">
            Осуществляем поставки по всей территории РФ и ближнего зарубежья.
          </p>
        </div>
      </div>
    </section>
  );
};
