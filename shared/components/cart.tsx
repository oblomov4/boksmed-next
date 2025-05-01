'use client';

import React from 'react';
import { CartTable } from './cart-table';
import { useCart } from '../hooks/use-cart';
import clsx from 'clsx';

export const Cart: React.FC = () => {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__top">
          <h3 className="title cart__title">Моя корзина</h3>
        </div>

        <div className="cart__inner">
          <div className="cart-wrapper">
            <button className="cart__top-btn">очистить корзину</button>
            <div className={clsx('table-background', loading && 'cart-table-loading')}>
              {items.map((item) => (
                <CartTable
                  onClickCountButton={onClickCountButton}
                  key={item.id}
                  quantity={item.quantity!}
                  imageUrl={item.products?.imageUrl as string}
                  name={item.products?.title as string}
                  id={item.id!}
                  price={item.products?.price as number}
                  removeCartItem={removeCartItem}
                />
              ))}
            </div>
          </div>

          <div className="cart-sum">
            <h3 className="cart-sum__title">Итоговая стоимость:</h3>
            <p className="cart-sum__summa">{totalAmount} р</p>

            <a className="promo__box-link cart-sum__link" href="">
              оформить заказ
            </a>
            <p className="cart-sum__politic">
              Нажимая на кнопку «Оформить заказ», я соглашаюсь с условиями.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
