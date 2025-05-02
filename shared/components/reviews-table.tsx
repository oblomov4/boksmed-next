'use client';

import React from 'react';
import Image from 'next/image';
import { sendReviews } from '@/app/actions';
import clsx from 'clsx';

interface Props {
  imageUrl: string;
  productId: number;
  title: string;
  futureReviewsId: number;
}

export const ReviewsTable: React.FC<Props> = ({ imageUrl, productId, title, futureReviewsId }) => {
  const [remove, setRemove] = React.useState<boolean>(false);
  const [raiting, setRaiting] = React.useState<'1' | '2' | '3' | '4' | '5'>('5');

  const [reviews, setReviews] = React.useState<string>('');

  function handleChangeRaiting(event: React.ChangeEvent<HTMLInputElement>) {
    if (Number(event.target.value) > 5) {
      setRaiting('5');
    }

    if (Number(event.target.value) <= 5) {
      setRaiting(event.target.value as '1' | '2' | '3' | '4' | '5');
    }

    if (Number(event.target.value) === 0) {
      setRaiting('1');
    }
  }

  async function handleClickSendReviews() {
    const res = await sendReviews(raiting, reviews, productId, futureReviewsId);

    if (res) {
      setRemove(true);
    } else {
      alert('Что то пошло не так!');
    }
  }

  return (
    <div className={clsx('reviews-table', remove && 'remove')}>
      <div className="cell cell-title">№</div>
      <div className="cell cell-title">Фото</div>
      <div className="cell cell-title">Название товара</div>
      <div className="cell cell-title">оценка</div>
      <div className="cell cell-title">Комментарий (отзыв)</div>
      <div className="cell cell-title">Сохранить</div>

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
        <input type="number" value={raiting} onChange={handleChangeRaiting} />
      </div>
      <div className="cell" data-label="Коментарий">
        <textarea
          value={reviews}
          onChange={(e) => setReviews(e.target.value)}
          className="cell-textarea"
          name=""
          id=""></textarea>
      </div>

      <div className="cell" data-label="Коментарий">
        <button disabled={reviews.length < 1} onClick={handleClickSendReviews}>
          Отправить отзыв
        </button>
      </div>
    </div>
  );
};
