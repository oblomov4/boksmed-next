'use client';

import React from 'react';
import Link from 'next/link';
import { resetPassword } from '@/app/actions';

export const ForgotPasswordForm: React.FC = () => {
  const [state, formAction] = React.useActionState(resetPassword, {});
  return (
    <form action={formAction}>
      <div className="anonym__content-wrapper">
        <div className="anonym__content-left">
          <input
            placeholder="Введите ваш Email"
            type="email"
            className="anonym__content-input"
            name="email"
            required
          />
        </div>
      </div>

      {state.error && <p className="err">{state.error}</p>}

      <button className="promo__box-link">отправить</button>
      <Link className="anonym-link" href="/register">
        Регистрация
      </Link>
    </form>
  );
};
