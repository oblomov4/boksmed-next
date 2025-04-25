import React from 'react';
import { CartItem } from './cart-item';

export const CartWrapper: React.FC = () => {
  return (
    <div className="user-cart-table">
      <div className="cell cell-title"></div>
      <div className="cell cell-title">фото</div>
      <div className="cell cell-title">Товар</div>
      <div className="cell cell-title">Цена</div>
      <div className="cell cell-title">Количество</div>
      <div className="cell cell-title">Сумма</div>
      <div className="cell cell-title"></div>

      <CartItem />
    </div>
  );
};
