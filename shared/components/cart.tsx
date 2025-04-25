import React from 'react';
import { CartWrapper } from './cart-wrapper';

export const Cart: React.FC = () => {
  return (
    <section className="cart">
      <div className="container">
        <div className="cart__top">
          <h3 className="title cart__title">Моя корзина</h3>
        </div>

        <div className="cart__inner">
          <div className='cart-wrapper'>
            <button className="cart__top-btn">очистить корзину</button>
            <div className="table-background ">
              <CartWrapper />
            </div>
          </div>

          <div className="cart-sum">
            <h3 className="cart-sum__title">Итоговая стоимость:</h3>
            <p className="cart-sum__summa">17 500 р</p>

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
