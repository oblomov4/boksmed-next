import React from 'react';

export const OrderItem: React.FC = () => {
  return (
    <>
      <div className="cell" data-label="№">
        1
      </div>
      <div className="cell cell-img" data-label="Фото">
        <img src="/images/orders1.png" alt="Товар 1" />
      </div>
      <div className="cell" data-label="Название товара">
        АВТОМАТИЧЕСКИЙ ДЕФИБРИЛЛЯТОР PRIMEDIC HEARTSAVE PAD
      </div>
      <div className="cell" data-label="Цена">
        17 500 ₽
      </div>
      <div className="cell" data-label="Количество">
        1
      </div>
      <div className="cell" data-label="Дата доставки">
        23.05.22
      </div>
    </>
  );
};
