import React from 'react';
import { ReviewsItem } from './reviews-item';

export const ReviewsItemWrapper: React.FC = () => {
  return (
    <div className="reviews-table">
      <div className="cell cell-title">№</div>
      <div className="cell cell-title">Фото</div>
      <div className="cell cell-title">Название товара</div>
      <div className="cell cell-title">оценка</div>
      <div className="cell cell-title">Комментарий (отзыв)</div>

      <ReviewsItem />
    </div>
  );
};
