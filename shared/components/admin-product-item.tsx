'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface Props {
  title: string;
  imageUrl: string;
  description: string;
  quantity: number;
  id: number;
  visible: boolean;
}

export const AdminProductItem: React.FC<Props> = ({
  title,
  imageUrl,
  description,
  quantity,
  id,
  visible,
}) => {
  const [newQuantity, setNewQuantity] = React.useState<string>(String(quantity));

  const [remove, setRemove] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<boolean>(visible);

  async function handleChangeVisible() {
    setIsVisible(!isVisible);
    try {
      const res = await fetch('/api/product-visible', {
        method: 'PATCH',
        body: JSON.stringify({ visible: !isVisible, id: id }),
      });

      await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct() {
    try {
      const res = await fetch('/api/product-delete', {
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

  async function saveNewQuantity() {
    try {
      await fetch('/api/product-new-quantity', {
        method: 'PATCH',
        body: JSON.stringify({ id: id, quantity: newQuantity }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={clsx('product-table-admin', remove && 'remove')}>
      <div className="cell cell-title">фото</div>
      <div className="cell cell-title">название</div>
      <div className="cell cell-title">описание</div>
      <div className="cell cell-title">Видимость</div>
      <div className="cell cell-title">Количество</div>
      <div className="cell cell-title">Удалить</div>

      <div className="cell" data-label="Фото">
        <Image width={150} height={100} src={imageUrl} alt="" />
      </div>
      <div className="cell" data-label="название">
        {title}
      </div>
      <div className="cell" data-label="ИНН">
        {description}
      </div>
      <div className="cell cell-visible" data-label="видимость">
        <label className="switch">
          <input type="checkbox" checked={isVisible} onChange={handleChangeVisible} />
        </label>
      </div>

      <div className="cell" data-label="Количество">
        <div className="quantity">
          <input type="text" value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)} />
          <button onClick={saveNewQuantity}>Сохранить</button>
        </div>
      </div>
      <div className="cell" data-label="Удалить">
        <button onClick={deleteProduct}>
          <Image width={18} height={18} src="/images/del.png" alt="" />
        </button>
      </div>
    </div>
  );
};
