'use client';

import React from 'react';
import Image from 'next/image';

interface Props {
  imageUrl: string;
  title: string;
  raiting: string;
  text: string;
}

export const AdminReviewsTable: React.FC<Props> = ({ imageUrl, title, text, raiting }) => {
  return (
    <div className="admin-reviews-table">
      <div className="cell cell-title">№</div>
      <div className="cell cell-title">Фото</div>
      <div className="cell cell-title">Название товара</div>
      <div className="cell cell-title">оценка</div>
      <div className="cell cell-title">Комментарий (отзыв)</div>

      <div className="cell" data-label="№">
        1
      </div>
      <div className="cell cell-img" data-label="Фото">
        <Image width={179} height={131} className="grade__image" src={imageUrl} alt="Товар 1" />
      </div>
      <div className="cell" data-label="Название товара">
        {title}
      </div>
      <div className="cell" data-label="оценка">
        {raiting}
      </div>
      <div className="cell" data-label="Коментарий">
        <div className="cell-textarea div">{text}</div>
      </div>
    </div>
  );
};
