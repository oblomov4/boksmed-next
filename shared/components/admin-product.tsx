'use client';

import React from 'react';
import { ProductAdd } from './product-add';
import { SelectCategoryTable, SelectProducesiltTable } from '@/db/schema';

interface Props {
  categories: SelectCategoryTable[];
  producesilt: SelectProducesiltTable[];
}

export const AdminProduct: React.FC<Props> = ({ categories, producesilt }) => {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <>
      <div className="events__top">
        <button className="events__top-btn promo__box-link" onClick={() => setShow(true)}>
          Добавить Продукт
        </button>
      </div>

      <ProductAdd show={show} producesilt={producesilt} categories={categories} />
    </>
  );
};
