import React from 'react';

export const RegisterForm: React.FC = () => {
  return (
    <form>
      <div className="anonym__content">
        <div className="anonym__content-wrapper">
          <div className="anonym__content-left">
            <input placeholder="E-mail" type="text" className="anonym__content-input" />
            <input placeholder="Пароль" type="text" className="anonym__content-input" />
            <input placeholder="Подтверждение пароля" type="text" className="anonym__content-input" />
          </div>
          <div className="anonym__content-right">
            <input placeholder="Имя" type="text" className="anonym__content-input" />
            <input placeholder="Фамилия" type="text" className="anonym__content-input" />
            <input placeholder="Номер" type="text" className="anonym__content-input" />
          </div>
        </div>

        <button className="promo__box-link">отправить</button>
        <p className="promo__box-politic">Нажимая на кнопку «Отправить», я соглашаюсь с условиями.</p>
      </div>
    </form>
  );
};
