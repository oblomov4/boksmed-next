'use client';

import React from 'react';
import { useCartStore } from '../store/cart';
import { useShallow } from 'zustand/shallow';

interface Props {
  id: number;
}

export const Buttons: React.FC<Props> = ({ id }) => {
  const [addCartItem, loading] = useCartStore(
    useShallow((state) => [state.addCartItem, state.loading]),
  );

  async function handleClick() {
    await addCartItem(id);
  }

  return (
    <div className="product-info__buttons">
      <button className="promo__box-link product-info__btn" onClick={handleClick}>
        В корзину
      </button>
      <button className="product-info__button product-info__btn">Купить в 1 клик</button>
    </div>
  );
};
