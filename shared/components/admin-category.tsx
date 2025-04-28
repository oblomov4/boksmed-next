'use client';

import React from 'react';
import { CategoryAdd } from './category-add';

export const AdminCategory: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <>
      <div className="events__top">
        <button className="events__top-btn promo__box-link" onClick={() => setShow(true)}>
          Добавить Категорию
        </button>
      </div>

      <CategoryAdd setShow={setShow} show={show} />
    </>
  );
};
