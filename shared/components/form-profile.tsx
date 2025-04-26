'use client';

import { editProfile } from '@/app/actions';
import { Session } from 'next-auth';
import React from 'react';

interface Props {
  session: Session;
}

export const FormProfile: React.FC<Props> = ({ session }) => {
  const [state, formAction] = React.useActionState(editProfile, {});

  return (
    <div className="profile__left">
      <form action={formAction}>
        <h3 className="profile__left-title">Мой профиль</h3>
        <div className="profile__left-wrapper">
          <input
            className="profile__left-box"
            placeholder="Имя"
            defaultValue={session.user.name}
            name="name"
          />
          <input
            className="profile__left-box"
            placeholder="Фамилия"
            defaultValue={session.user.lastName}
            name="lastName"
          />
          <input
            className="profile__left-box"
            placeholder="Инн"
            defaultValue={session.user.inn}
            name="inn"
          />
          <input
            className="profile__left-box"
            placeholder="Телефон"
            name="phone"
            defaultValue={session.user.phone}
          />
          <input
            placeholder="E-mail"
            name="email"
            className="profile__left-box"
            defaultValue={session.user.email}
          />
          <input name="password" className="profile__left-box" placeholder="Пароль" />
          <input
            name="confirmPassword"
            className="profile__left-box"
            placeholder="Подтвердите пароль"
          />
        </div>

        <button className="profile__left-btn profile__right-btn">Сохранить!</button>

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

        {state.successMessage && <p className="success">{state.successMessage}</p>}
      </form>
    </div>
  );
};
