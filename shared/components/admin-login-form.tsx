'use client';

import React from 'react';
import { loginUser } from '@/app/actions';

export const AdminLoginForm: React.FC = () => {
  const [state, formAction] = React.useActionState(loginUser, {});

  return (
    <form action={formAction}>
      <div className="login-form">
        <div className="login-form__top">
          <h1 className="login-form__title">Войти в личный кабинет для администратора</h1>
        </div>

        <div className="login__form-content">
          <div className="login-form__fields">
            <input className="login-form__input" type="text" placeholder="Логин" name="email" />

            <input
              className="login-form__input"
              type="password"
              id="password"
              placeholder="Пароль"
              name="password"
            />
          </div>
          <div className="login-form__forgot-password">
            <a href="#">Забыли пароль?</a>
          </div>

          {state.message && <p className="err">{state.message}</p>}

          {state.errors?.password &&
            state.errors.password.map((item, index) => (
              <p className="err" key={index}>
                {item}
              </p>
            ))}

          {state.errors?.email &&
            state.errors.email.map((item, index) => (
              <p className="err" key={index}>
                {item}
              </p>
            ))}

          <button className="login-form__button promo__box-link">Войти</button>
        </div>
      </div>
    </form>
  );
};
