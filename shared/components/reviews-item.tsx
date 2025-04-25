import React from 'react';

export const ReviewsItem: React.FC = () => {
  return (
    <>
      <div className="cell" data-label="№">
        1
      </div>
      <div className="cell cell-img" data-label="Фото">
        <img className="grade__image" src="/images/orders1.png" alt="Товар 1" />
      </div>
      <div className="cell" data-label="Название товара">
        АВТОМАТИЧЕСКИЙ ДЕФИБРИЛЛЯТОР PRIMEDIC HEARTSAVE PAD
      </div>
      <div className="cell" data-label="оценка">
        <div className="grade-box">
          <img className="grade-box-img" src="/images/star-gold.svg" alt="" />
          <img className="grade-box-img" src="/images/star-gold.svg" alt="" />
          <img className="grade-box-img" src="/images/star-gold.svg" alt="" />
          <img className="grade-box-img" src="/images/star-gold.svg" alt="" />
          <img className="grade-box-img" src="/images/star-gold.svg" alt="" />
        </div>
      </div>
      <div className="cell" data-label="Коментарий">
        <textarea className="cell-textarea" name="" id=""></textarea>
      </div>
    </>
  );
};
