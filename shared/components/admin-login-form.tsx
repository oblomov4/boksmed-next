import React from 'react';

export const AdminLoginForm: React.FC = () => {
  return (
    <form>
      <div className="login-form">
        <div className="login-form__top">
          <h1 className="login-form__title">Войти в личный кабинет для администратора</h1>
        </div>

        <div className="login__form-content">
          <div className="login-form__fields">
            <input className="login-form__input" type="text" placeholder="Логин" />

            <input className="login-form__input" type="password" id="password" placeholder="Пароль" />
          </div>
          <div className="login-form__forgot-password">
            <a href="#">Забыли пароль?</a>
          </div>
          <button className="login-form__button promo__box-link">Войти</button>
        </div>
      </div>
    </form>
  );
};
