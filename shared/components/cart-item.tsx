/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const CartItem: React.FC = () => {
  return (
    <>
      <div className="cell cell-visible" data-label="выбрать">
        <label className="switch">
          <input type="checkbox" checked />
          <span className="slider"></span>
        </label>
      </div>
      <div className="cell cell-img" data-label="Фото">
        <img src="images/orders1.png" alt="Товар 1" />
      </div>
      <div className="cell" data-label="товар">
        АВТОМАТИЧЕСКИЙ ДЕФИБРИЛЛЯТОР PRIMEDIC HEARTSAVE PAD
      </div>
      <div className="cell" data-label="цена">
        17 500 р
      </div>
      <div className="cell" data-label="количество">
        <div className="dilivery__calculate-panel">
          <button className="dilivery__panel-btn">
            <img className="dilivery__panel-btn-minus" src="images/_.svg" alt="" />
          </button>
          <p className="dilivery__panel-btn-text">1</p>
          <button className="dilivery__panel-btn">
            <img src="images/+.svg" className="dilivery__panel-btn-plus" alt="" />
          </button>
        </div>
      </div>

      <div className="cell" data-label="сумма">
        17 500 р
      </div>

      <div className="cell" data-label="дата">
        <button>
          <img src="images/del.png" alt="" />
        </button>
      </div>
    </>
  );
};
