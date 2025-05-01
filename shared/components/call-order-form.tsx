'use client';

import React from 'react';
import { orderCall } from '@/app/actions';

export const CallOrderForm: React.FC = () => {
  const [state, formAction] = React.useActionState(orderCall, {});

  return (
    <form action={formAction}>
      <div className="order-call__form-wrapper-input">
        <input
          placeholder="Как вас зовут?"
          className="order-call__form-input"
          type="text"
          name="name"
        />
        <input
          placeholder="Номер телефона"
          className="order-call__form-input"
          type="text"
          name="phone"
        />
      </div>

      <textarea
        placeholder="Сообщение"
        className="order-call__form-textarea"
        name="message"></textarea>

      <button className="order-call__form-btn">отправить</button>

      {state.errors?.name &&
        state.errors.name.map((item, id) => (
          <p className="err" key={id}>
            {item}
          </p>
        ))}

      {state.errors?.phone &&
        state.errors.phone.map((item, id) => (
          <p className="err" key={id}>
            {item}
          </p>
        ))}

      {state.errors?.message &&
        state.errors.message.map((item, id) => (
          <p className="err" key={id}>
            {item}
          </p>
        ))}

      {state.message && <p className="success">{state.message}</p>}
      {state.errMessage && <p className="success">{state.errMessage}</p>}
    </form>
  );
};
