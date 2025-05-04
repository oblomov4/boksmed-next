'use client';

import React from 'react';
import Link from 'next/link';
import { loginUser } from '@/app/actions';

export const LoginForm: React.FC = () => {
  const [state, formAction] = React.useActionState(loginUser, {});

  return (
    <form action={formAction}>
      <div className="anonym__content-wrapper">
        <div className="anonym__content-left">
          <input
            placeholder="Логин"
            type="email"
            className="anonym__content-input"
            name="email"
            required
          />
        </div>
        <div className="anonym__content-right">
          <input
            placeholder="Пароль"
            type="password"
            className="anonym__content-input"
            name="password"
            required
          />

          <Link className="anonym__content-pass" href="/forgot-password">
            Забыли пароль?
          </Link>
        </div>
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

      <button className="promo__box-link">отправить</button>
      <Link className="anonym-link" href="/register">
        Регистрация
      </Link>
    </form>
  );
};
