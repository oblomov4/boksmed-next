import React from 'react';

export const LoginForm: React.FC = () => {
  return (
    <form>
      <div className="anonym__content-wrapper">
        <div className="anonym__content-left">
          <input placeholder="Логин" type="text" className="anonym__content-input" />
        </div>
        <div className="anonym__content-right">
          <input placeholder="Пароль" type="text" className="anonym__content-input" />

          <a className="anonym__content-pass" href="#">
            Забыли пароль?
          </a>
        </div>
      </div>

      <button className="promo__box-link">отправить</button>
      <a className="anonym-link" href="#">
        Регистрация
      </a>
    </form>
  );
};
