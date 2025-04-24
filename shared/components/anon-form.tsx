import React from 'react';

export const AnonForm: React.FC = () => {
  return (
    <form>
      <div className="anonym__content">
        <div className="anonym__content-wrapper">
          <div className="anonym__content-left">
            <input placeholder="Контактное лицо (имя)" type="text" className="anonym__content-input" />
            <input placeholder="номер" type="text" className="anonym__content-input" />
            <input placeholder="E-mail" type="text" className="anonym__content-input" />
          </div>
          <div className="anonym__content-right">
            <input
              placeholder="Наименование организации"
              type="text"
              className="anonym__content-input"
            />
            <input placeholder="ИНН" type="text" className="anonym__content-input" />
          </div>
        </div>

        <button className="promo__box-link">отправить</button>
        <p className="promo__box-politic">Нажимая на кнопку «Отправить», я соглашаюсь с условиями.</p>
      </div>
    </form>
  );
};
