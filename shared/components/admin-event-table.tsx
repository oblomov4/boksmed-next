'use client';

import Image from 'next/image';
import React from 'react';

interface Props {
  info: boolean;
  imageUrl: string;
  title: string;
  description: string;
  visible: boolean;
  id: number;
}

export const AdminEventTable: React.FC<Props> = ({ imageUrl, title, description, visible, id }) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(visible);

  const tableRef = React.useRef<HTMLDivElement>(null);

  async function handleChecked() {
    setIsChecked(!isChecked);

    try {
      await fetch('/api/event-visible', {
        method: 'PATCH',
        body: JSON.stringify({ id }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function handleClickDelete() {
    try {
      const res = await fetch('/api/event-delete', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.message === 'success') {
        tableRef.current?.remove();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="events-table" ref={tableRef}>
      <div className="cell cell-title">фото</div>
      <div className="cell cell-title">название</div>
      <div className="cell cell-title">описание</div>
      <div className="cell cell-title">Видимость</div>
      <div className="cell cell-title">Удалить</div>

      <div className="cell" data-label="Фото">
        <Image width={130} height={130} src={imageUrl} alt="Товар 1" />
      </div>
      <div className="cell" data-label="название">
        {title}
      </div>
      <div className="cell" data-label="ИНН">
        {description}
      </div>
      <div className="cell cell-visible" data-label="видимость">
        <label className="switch">
          <input type="checkbox" checked={isChecked} onChange={() => handleChecked()} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="cell" data-label="Удалить">
        <button onClick={handleClickDelete}>
          <Image width={18} height={18} src="/images/del.png" alt="" />
        </button>
      </div>
    </div>
  );
};
