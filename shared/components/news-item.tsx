import Image from 'next/image';
import React from 'react';

export const NewsItem: React.FC = () => {
  return (
    <div className="news-page__box">
      <Image
        width={342}
        height={118}
        className="news-page__box-img"
        src="/images/news1.png"
        alt="news"
      />
      <div className="news-page__box-header">
        <p className="news-page__box-date">14.04.2022</p>
        <div className="news-page_boxr-grade">
          <Image
            width={8}
            height={9}
            src="images/star-gold.svg"
            alt=""
            className="news-page__box-star"
          />
          <Image
            width={8}
            height={9}
            src="images/star-gold.svg"
            alt=""
            className="news-page__box-star"
          />
          <Image
            width={8}
            height={9}
            src="images/star-gold.svg"
            alt=""
            className="news-page__box-star"
          />
          <Image
            width={8}
            height={9}
            src="images/star-gold.svg"
            alt=""
            className="news-page__box-star"
          />
          <Image
            width={8}
            height={9}
            src="images/star-gold.svg"
            alt=""
            className="news-page__box-star"
          />
        </div>
      </div>

      <p className="news-page__box-content">
        УЧЕНЫЕ ВЫРАСТИЛИ КЛЕТКИ СО ВЖИВЛЕННОЙ В НИХ ЭЛЕКТРОНИКОЙ
      </p>

      <div className="news-page__box-bottom">
        <a href="#" className="news-page__box-link">
          Читать дальше
        </a>
        <p className="news-page__box-author">
          Автор: <span>Константин К.Р</span>
        </p>
      </div>
    </div>
  );
};
