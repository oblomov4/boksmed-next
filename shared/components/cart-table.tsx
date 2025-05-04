'use client';

import Image from 'next/image';
import React from 'react';

interface Props {
  quantity: number;
  imageUrl: string;
  name: string;
  price: number;
  id: number;
  onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
  removeCartItem: (id: number) => void;
}

export const CartTable: React.FC<Props> = ({
  quantity,
  imageUrl,
  name,
  price,
  id,
  onClickCountButton,
  removeCartItem,
}) => {
  return (
    <div className="user-cart-table">
      <div className="cell cell-title">фото</div>
      <div className="cell cell-title">Товар</div>
      <div className="cell cell-title">Цена</div>
      <div className="cell cell-title">Количество</div>
      <div className="cell cell-title"></div>

      <div className="cell cell-img" data-label="Фото">
        <Image width={179} height={131} src={imageUrl} alt="Товар 1" />
      </div>
      <div className="cell" data-label="товар">
        {name}
      </div>
      <div className="cell" data-label="цена">
        {price} р
      </div>
      <div className="cell" data-label="количество">
        <div className="dilivery__calculate-panel">
          <button
            className="dilivery__panel-btn"
            onClick={() => onClickCountButton(id, quantity, 'minus')}
            disabled={quantity === 1}>
            <Image
              width={9}
              height={1}
              className="dilivery__panel-btn-minus"
              src="images/_.svg"
              alt=""
            />
          </button>
          <p className="dilivery__panel-btn-text">{quantity}</p>
          <button
            className="dilivery__panel-btn"
            onClick={() => onClickCountButton(id, quantity, 'plus')}>
            <Image
              width={8}
              height={7}
              src="images/+.svg"
              className="dilivery__panel-btn-plus"
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="cell" data-label="дата">
        <button onClick={() => removeCartItem(id)}>
          <Image width={18} height={18} src="/images/del.png" alt="" />
        </button>
      </div>
    </div>
  );
};
