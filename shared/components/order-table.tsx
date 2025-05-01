import Image from 'next/image';
import React from 'react';

interface Props {
  imageUrl: string;
  number: number;
  title: string;
  totalAmount: number;
  quantity: number;
}

export const OrderTable: React.FC<Props> = ({ imageUrl, number, title, totalAmount, quantity }) => {
  return (
    <div className="grid-table">
      <div className="cell cell-title">№</div>
      <div className="cell cell-title">Фото</div>
      <div className="cell cell-title">Название товара</div>
      <div className="cell cell-title">Цена</div>
      <div className="cell cell-title">Количество</div>

      <div className="cell" data-label="№">
        {number}
      </div>
      <div className="cell cell-img" data-label="Фото">
        <Image width={179} height={131} src={imageUrl} alt="Товар 1" />
      </div>
      <div className="cell" data-label="Название товара">
        {title}
      </div>
      <div className="cell" data-label="Цена">
        {totalAmount} ₽
      </div>
      <div className="cell" data-label="Количество">
        {quantity}
      </div>
    </div>
  );
};
