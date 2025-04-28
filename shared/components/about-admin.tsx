'use client';

import React from 'react';
import { EventAdd } from './event-add';

export const AboutAdmin: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <>
      <div className="events__top">
        <button className="events__top-btn promo__box-link" onClick={() => setShow(true)}>
          Добавить событие
        </button>
      </div>

      <EventAdd setShow={setShow} show={show} />
 
    </>
  );
};
