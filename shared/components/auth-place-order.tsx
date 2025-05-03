'use client';

import { loginUser } from '@/app/actions';
import React from 'react';

export const AuthPlaceOrder: React.FC = () => {
  const [state, formAction] = React.useActionState(loginUser, {});
  return (
    <form action={formAction}>
      <div className="auth-block">
        <h2 className="auth-block__title">Постоянный клиент</h2>

        <input type="email" className="auth-block__input" placeholder="Логин" name="email" />
        <input type="password" className="auth-block__input" placeholder="Пароль" name="password" />

        <a href="#" className="auth-block__forgot-password">
          Забыли пароль?
        </a>

        <button className="promo__box-link auth-block__button">Войти</button>

        <p className="auth-block__agreement">
          Нажимая на кнопку «Войти», я соглашаюсь с условиями.
        </p>
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
    </form>
  );
};
