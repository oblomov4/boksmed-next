'use client';

import React from 'react';
import { useCartStore } from '../store/cart';
import { useShallow } from 'zustand/shallow';
import { redirect } from 'next/navigation';

interface Props {
  id: number;
}

export const Buttons: React.FC<Props> = ({ id }) => {
  const [addCartItem] = useCartStore(useShallow((state) => [state.addCartItem]));

  async function handleClick() {
    await addCartItem(id);
  }

  async function handleBuyOneClick() {
    await addCartItem(id);
    redirect('/cart/create-order/');
  }

  return (
    <div className="product-info__buttons">
      <button className="promo__box-link product-info__btn" onClick={handleClick}>
        В корзину
      </button>
      <button className="product-info__button product-info__btn" onClick={handleBuyOneClick}>
        Купить в 1 клик
      </button>
    </div>
  );
};
