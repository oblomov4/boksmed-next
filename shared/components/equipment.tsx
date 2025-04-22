/* eslint-disable @next/next/no-img-element */
'use client';
import clsx from 'clsx';
import React from 'react';

interface Props {
  all: boolean;
}

export const Equipment: React.FC<Props> = ({ all }) => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <section className="equipment">
      <div className="container">
        <h2 className="title">Медицинское оборудование</h2>
        <div className="equipment__inner">
          <div className="equipment__box equipment__box--one">
            <h3 className="equipment__box-title">ДЕФИБРИЛЯТОРЫ</h3>
            <a href="#" className="equipment__box-a">
              перейти в каталог
            </a>
            <img
              className="equipment__box-img equipment__box-img--one"
              src="images/equipment1.png"
              alt="оборудование"
            />
          </div>

          <div className="equipment__box">
            <h3 className="equipment__box-title">РЕАНИМАЦИЯ</h3>
            <a href="#" className="equipment__box-a">
              перейти в каталог
            </a>
            <img className="equipment__box-img" src="images/equipment2.png" alt="оборудование" />
          </div>

          <div className="equipment__box">
            <h3 className="equipment__box-title">СШИВАЮЩИЕ ИНСТРУМЕНТЫ</h3>
            <a href="#" className="equipment__box-a">
              перейти в каталог
            </a>
            <img className="equipment__box-img" src="images/equipment3.png" alt="оборудование" />
          </div>

          <div className="equipment__box">
            <h3 className="equipment__box-title">МЕДИЦИНСКИЙ ИНСТРУМЕНТ</h3>
            <a href="#" className="equipment__box-a">
              перейти в каталог
            </a>
            <img className="equipment__box-img" src="images/equipment4.png" alt="оборудование" />
          </div>

          <div className="equipment__box">
            <h3 className="equipment__box-title">КИСЛОРОДНОЕ ОБОРУДОВАНИЕ</h3>
            <a href="#" className="equipment__box-a">
              перейти в каталог
            </a>
            <img className="equipment__box-img" src="images/equipment5.png" alt="оборудование" />
          </div>

          <div className={clsx('equipment__box', !show && 'hidden', show && 'show')}>
            <h3 className="equipment__box-title">Импланты</h3>
            <a href="#" className="equipment__box-a">
              перейти в каталог
            </a>
            <img className="equipment__box-img" src="images/equipment6.png" alt="оборудование" />
          </div>
        </div>
        {!all &&
          (!show ? (
            <button className="equipment__btn rotate-0" onClick={() => setShow(true)}>
              показать все медицинское оборудование
            </button>
          ) : (
            <button className="equipment__btn " onClick={() => setShow(false)}>
              скрыть медицинское оборудование
            </button>
          ))}
      </div>
    </section>
  );
};
