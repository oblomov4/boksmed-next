'use client';

import React from 'react';
import { registerUser } from '@/app/actions';

export const RegisterForm: React.FC = () => {
  const [state, formAction] = React.useActionState(registerUser, {});

  return (
    <form action={formAction}>
      <div className="anonym__content">
        <div className="anonym__content-wrapper">
          <div className="anonym__content-left">
            <input
              placeholder="E-mail"
              type="email"
              name="email"
              className="anonym__content-input"
              required
            />
            <input
              placeholder="Пароль"
              name="password"
              type="password"
              className="anonym__content-input"
              required
            />
            <input
              name="confirmPassword"
              placeholder="Подтверждение пароля"
              id="confirmPassword"
              type="password"
              className="anonym__content-input"
              required
            />
            <input
              placeholder="ИНН"
              type="text"
              className="anonym__content-input"
              name="inn"
              required
            />
          </div>
          <div className="anonym__content-right">
            <input
              placeholder="Имя"
              type="text"
              className="anonym__content-input"
              name="name"
              required
            />
            <input
              placeholder="Фамилия"
              type="text"
              className="anonym__content-input"
              name="lastName"
              required
            />
            <input
              placeholder="Номер"
              type="text"
              className="anonym__content-input"
              name="phone"
              required
            />
          </div>
        </div>

        <button className="promo__box-link">отправить</button>
        <p className="promo__box-politic">
          Нажимая на кнопку «Отправить», я соглашаюсь с условиями.
        </p>
      </div>

      {state.errors?.password &&
        state.errors.password.map((item, index) => (
          <p className="err" key={index}>
            {item}
          </p>
        ))}

      {state.errors?.confirmPassword &&
        state.errors.confirmPassword.map((item, index) => (
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

      {state.errors?.name &&
        state.errors.name.map((item, index) => (
          <p className="err" key={index}>
            {item}
          </p>
        ))}

      {state.errors?.lastName &&
        state.errors.lastName.map((item, index) => (
          <p className="err" key={index}>
            {item}
          </p>
        ))}

      {state.errors?.phone &&
        state.errors.phone.map((item, index) => (
          <p className="err" key={index}>
            {item}
          </p>
        ))}

      {state.errors?.inn &&
        state.errors.inn.map((item, index) => (
          <p className="err" key={index}>
            {item}
          </p>
        ))}

      {state.message && <p className="err">{state.message}</p>}
    </form>
  );
};
