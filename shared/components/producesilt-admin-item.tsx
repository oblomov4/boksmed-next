'use client';

import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  className?: string;
  title: string;
  id: number;
  imageUrl: string;
  description: string;
}

export const ProducesiltAdminItem: React.FC<Props> = ({ title, id }) => {
  const [remove, setRemove] = React.useState<boolean>(false);

  async function handleClickDelete() {
    try {
      const res = await fetch('/api/producesilt-remove', {
        method: 'POST',
        body: JSON.stringify({id}),
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
    <div>
      <div className={clsx('category-item', remove && 'remove')}>
        <div className="category-item-title">{title}</div>
        <div className="category-item-box-btn">
          <button>
            <Image
              width={10}
              height={10}
              src="/images/del.png"
              alt="delete"
              onClick={handleClickDelete}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
