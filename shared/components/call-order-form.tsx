import React from 'react';

export const CallOrderForm: React.FC = () => {
  return (
    <form>
      <div className="order-call__form-wrapper-input">
        <input placeholder="Как вас зовут?" className="order-call__form-input" type="text" />
        <input placeholder="+ 7 (___)-___-__-__" className="order-call__form-input" type="text" />
      </div>

      <textarea placeholder="Сообщение" className="order-call__form-textarea"></textarea>

      <button className="order-call__form-btn">отправить</button>
    </form>
  );
};
