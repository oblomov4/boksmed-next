/* eslint-disable @next/next/no-img-element */
'use client';
import { SelectCategoryTable } from '@/db/schema';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface Props {
  all: boolean;
  catalog: SelectCategoryTable[];
}

export const Equipment: React.FC<Props> = ({ all, catalog }) => {
  const [show, setShow] = React.useState<boolean>(false);

  console.log('PERERISOVKA?');

  return (
    <section className="equipment">
      <div className="container">
        <h2 className="title">Медицинское оборудование</h2>
        <div className="equipment__inner">
          {catalog.map((item, index) => {
            if (index === 0) {
              return (
                <div key={item.id} className="equipment__box equipment__box--one">
                  <h3 className="equipment__box-title">{item.title}</h3>
                  <Link href={`/catalog/${item.id}`} className="equipment__box-a">
                    перейти в каталог
                  </Link>
                  <img
                    className="equipment__box-img equipment__box-img--one"
                    src={item.imageUrl!}
                    alt="оборудование"
                  />
                </div>
              );
            } else if (!all && index > 4) {
              return (
                <div
                  key={item.id}
                  className={clsx('equipment__box', !show && 'hidden', show && 'show')}>
                  <h3 className="equipment__box-title">{item.title}</h3>
                  <Link href={`/catalog/${item.id}`} className="equipment__box-a">
                    перейти в каталог
                  </Link>
                  <img className="equipment__box-img" src={item.imageUrl!} alt="оборудование" />
                </div>
              );
            } else {
              return (
                <div key={item.id} className="equipment__box">
                  <h3 className="equipment__box-title">{item.title}</h3>
                  <a href={`/catalog/${item.id}`} className="equipment__box-a">
                    перейти в каталог
                  </a>
                  <img className="equipment__box-img" src={item.imageUrl!} alt="оборудование" />
                </div>
              );
            }
          })}
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
