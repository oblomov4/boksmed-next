'use client';

import React from 'react';
import { CartTable } from './cart-table';
import { useCart } from '../hooks/use-cart';
import clsx from 'clsx';
import { Session } from 'next-auth';
import Link from 'next/link';

interface Props {
  session: Session | null;
}

export const Cart: React.FC<Props> = ({ session }) => {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

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

        {items && items.length > 0 ? (
          <div className="cart__inner">
            <div className="cart-wrapper">
              <div className={clsx('table-background')}>
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

              {!session && (
                <Link className="promo__box-link cart-sum__link" href="/cart/place-order">
                  оформить заказ
                </Link>
              )}

              {session && (
                <Link className="promo__box-link cart-sum__link" href="/cart/create-order">
                  оформить заказ
                </Link>
              )}
              <p className="cart-sum__politic">
                Нажимая на кнопку «Оформить заказ», я соглашаюсь с условиями.
              </p>
            </div>
          </div>
        ) : (
          'Ваша корзина пуста'
        )}
      </div>
    </section>
  );
};
