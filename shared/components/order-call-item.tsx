'use client';

import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  name: string;
  phone: string;
  message: string;
  id: number;
}

export const OrderCallItem: React.FC<Props> = ({ name, phone, message, id }) => {
  const [remove, setRemove] = React.useState<boolean>(false);

  async function handleClickDelete() {
    try {
      const res = await fetch('/api/delete-order-call/', {
        method: 'DELETE',
        body: JSON.stringify({ id: id }),
      });

      const data = await res.json();

      if (data.success) {
        setRemove(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={clsx('order-call-item', remove && 'remove')}>
      <div>
        <div>
          <b>Имя:</b> {name}
        </div>
        <div>
          <b> Телефон:</b> {phone}
        </div>
        <div>
          <b> Сообещние: </b>
          {message}
        </div>
      </div>

      <button onClick={handleClickDelete}>
        <Image width={18} height={18} src="/images/del.png" alt="" />
      </button>
    </div>
  );
};
