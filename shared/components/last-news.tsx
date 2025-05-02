import React from 'react';
import { NewsItem } from './news-item';

export const LastNews: React.FC = () => {
  return (
    <section className="news">
      <div className="container">
        <h2 className="title">Последние новости</h2>
        <div className="news__inner">
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    </section>
  );
};
