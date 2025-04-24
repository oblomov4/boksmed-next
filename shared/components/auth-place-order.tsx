import React from 'react';

export const AuthPlaceOrder: React.FC = () => {
  return (
    <form>
      <div className="auth-block">
        <h2 className="auth-block__title">Постоянный клиент</h2>

        <input type="text" className="auth-block__input" placeholder="Логин" />
        <input type="password" className="auth-block__input" placeholder="Пароль" />

        <a href="#" className="auth-block__forgot-password">
          Забыли пароль?
        </a>

        <button className="promo__box-link auth-block__button">Войти</button>

        <p className="auth-block__agreement">
          Нажимая на кнопку «Войти», я соглашаюсь с условиями.
        </p>
      </div>
    </form>
  );
};
