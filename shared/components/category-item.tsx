'use client';

import React from 'react';
import Image from 'next/image';
import { EditCategory } from './edit-category';
import clsx from 'clsx';

interface Props {
  id: number;
  title: string;
  imageUrl: string;
}

export const CategoryItem: React.FC<Props> = ({ id, imageUrl, title }) => {
  const [show, setShow] = React.useState<boolean>(false);

  const [remove, setRemove] = React.useState<boolean>(false);

  async function handleClickDelete() {
    try {
      const res = await fetch('/api/category-delete', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
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
              src="/images/edit.png"
              alt="edit"
              onClick={() => setShow(true)}
            />
          </button>
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
      <EditCategory setShow={setShow} show={show} title={title} id={id} imageUrl={imageUrl} />
    </div>
  );
};
