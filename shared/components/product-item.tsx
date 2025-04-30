import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
  title: string;
  price: number;
  imageUrl: string;
}

export const ProductItem: React.FC<Props> = ({ title, price, imageUrl }) => {
  return (
    <div className="product-card">
      <Image width={283} height={206} className="product-card__img" src={imageUrl} alt={title} />
      {/* <div className="product-card__content"> */}
      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__price">{price}₽</p>
      {/* </div> */}
      <div className="product-card__actions">
        <button className="promo__box-link product-card__button">В корзину</button>
        <button className="product-card__btn">Купить</button>
      </div>
    </div>
  );
};
