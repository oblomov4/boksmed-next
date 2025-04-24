import React from 'react';

export const QuestionForm: React.FC = () => {
  return (
    <form>
      <div className="question-form__content">
        <div className="question-form__content-left">
          <input placeholder="Как вас зовут" className="question-form__content-input" type="text" />
          <input placeholder="E-mail" className="question-form__content-input" type="email" />
          <input placeholder="Телефон" className="question-form__content-input" type="text" />
        </div>
        <textarea placeholder="Сообщение" className="question-form__content-textarea"></textarea>
      </div>

      <button className="question-form__btn">отправить</button>
    </form>
  );
};
