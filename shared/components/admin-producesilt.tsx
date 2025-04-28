'use client';

import React from 'react';
import { ProducesiltAdd } from './producesilt-add';

export const AdminProducesilt: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <>
      <div className="events__top">
        <button className="events__top-btn promo__box-link" onClick={() => setShow(true)}>
          Добавить Производителя
        </button>
      </div>

      <ProducesiltAdd setShow={setShow} show={show} />
    </>
  );
};
