/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const LastNews: React.FC = () => {
  return (
    <section className="news">
      <div className="container">
        <h2 className="title">Последние новости</h2>
        <div className="news__inner">
          <div className="news__box">
            <img className="news__box-img" src="images/news1.png" alt="news" />
            <div className="news__box-header">
              <p className="news__box-date">14.04.2022</p>
              <div className="new__box-header-wrapper">
                <img className="news__box-header-img" src="images/star-gold.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gold.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gold.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gray.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gray.svg" alt="" />
              </div>
            </div>
            <h3 className="news__box-title">
              Власти поменяли лимит финансирования больниц для закупки лекарств
            </h3>
            <div className="news__box-content">
              <a className="news__box-link" href="#">
                читать дальше
              </a>
              <p className="news__box-author">
                Автор: <span>Александра К.Р</span>
              </p>
            </div>
          </div>

          <div className="news__box">
            <img className="news__box-img" src="images/news2.png" alt="news" />
            <div className="news__box-header">
              <p className="news__box-date">17.03.2022</p>
              <div className="new__box-header-wrapper">
                <img className="news__box-header-img" src="images/star-gold.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gold.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gold.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gray.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gray.svg" alt="" />
              </div>
            </div>
            <h3 className="news__box-title">
              УЧЕНЫЕ ВЫРАСТИЛИ КЛЕТКИ СО ВЖИВЛЕННОЙ В НИХ ЭЛЕКТРОНИКОЙ
            </h3>
            <div className="news__box-content">
              <a className="news__box-link" href="#">
                читать дальше
              </a>
              <p className="news__box-author">
                Автор: <span>Константин К.Р</span>
              </p>
            </div>
          </div>

          <div className="news__box">
            <img className="news__box-img" src="images/news3.png" alt="news" />
            <div className="news__box-header">
              <p className="news__box-date">15.05.2020</p>
              <div className="new__box-header-wrapper">
                <img className="news__box-header-img" src="images/star-gold.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gold.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gold.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gray.svg" alt="" />
                <img className="news__box-header-img" src="images/star-gray.svg" alt="" />
              </div>
            </div>
            <h3 className="news__box-title">
              Мантуров сообщил о проверке аппаратов ИВЛ на уральском заводе
            </h3>
            <div className="news__box-content">
              <a className="news__box-link" href="#">
                читать дальше
              </a>
              <p className="news__box-author">
                Автор: <span>Павел С.А</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
