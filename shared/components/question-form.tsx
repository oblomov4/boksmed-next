'use client';

import { orderCall } from '@/app/actions';
import React from 'react';

export const QuestionForm: React.FC = () => {
  const [state, formAction] = React.useActionState(orderCall, {});
  return (
    <form action={formAction}>
      <div className="question-form__content">
        <div className="question-form__content-left">
          <input
            placeholder="Как вас зовут"
            className="question-form__content-input"
            type="text"
            name="name"
          />
          <input placeholder="E-mail" className="question-form__content-input" type="email" />
          <input
            placeholder="Телефон"
            className="question-form__content-input"
            type="text"
            name="phone"
          />
        </div>
        <textarea
          placeholder="Сообщение"
          className="question-form__content-textarea"
          name="message"></textarea>
      </div>

      <button className="question-form__btn">отправить</button>

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
