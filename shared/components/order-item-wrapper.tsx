import React from 'react';
import { OrderItem } from './order-item';

export const OrderItemWrapper: React.FC = () => {
  return (
    <div className="grid-table">
      <div className="cell cell-title">№</div>
      <div className="cell cell-title">Фото</div>
      <div className="cell cell-title">Название товара</div>
      <div className="cell cell-title">Цена</div>
      <div className="cell cell-title">Количество</div>
      <div className="cell cell-title">Дата доставки</div>

      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
};
