'use client';
import React from 'react';
import { AboutBox } from './about-box';
import clsx from 'clsx';

export const AboutWrapper: React.FC = () => {
  const [showAll, setShowAll] = React.useState<boolean>(false);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="about__wrapper">
      <div className="about__inner">
        {arr.map((item, index) => {
          if (!showAll) {
            if (index >= 6) {
              return <AboutBox key={index} className="hidden" />;
            } else {
              return <AboutBox key={index} />;
            }
          } else {
            if (index >= 6) {
              return <AboutBox key={index} className="show" />;
            } else {
              return <AboutBox key={index} />;
            }
          }
        })}
      </div>

      {/* <div className="about__modal-wrapper">
        <div className="about__modal">
          <img className="about__modal-img" src="images/about1.png" alt="" />

          <div className="about__modal-content">
            <button className="about__modal-btn">Назад</button>

            <h3 className="about__modal-title">Название мероприятия (события)</h3>

            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">время</p>

            <a className="about__modal-button promo__box-link" href="#">
              забронировать место
            </a>
          </div>
        </div>
      </div>

      <div className="about__modal-wrapper">
        <div className="about__modal">
          <img className="about__modal-img" src="images/about2.png" alt="" />

          <div className="about__modal-content">
            <button className="about__modal-btn">Назад</button>

            <h3 className="about__modal-title">Название мероприятия (события)</h3>

            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">время</p>

            <a className="about__modal-button promo__box-link" href="#">
              забронировать место
            </a>
          </div>
        </div>
      </div>

      <div className="about__modal-wrapper">
        <div className="about__modal">
          <img className="about__modal-img" src="images/about3.png" alt="" />

          <div className="about__modal-content">
            <button className="about__modal-btn">Назад</button>

            <h3 className="about__modal-title">Название мероприятия (события)</h3>

            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">время</p>

            <a className="about__modal-button promo__box-link" href="#">
              забронировать место
            </a>
          </div>
        </div>
      </div>

      <div className="about__modal-wrapper">
        <div className="about__modal">
          <img className="about__modal-img" src="images/about1.png" alt="" />

          <div className="about__modal-content">
            <button className="about__modal-btn">Назад</button>

            <h3 className="about__modal-title">Название мероприятия (события)</h3>

            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">время</p>

            <a className="about__modal-button promo__box-link" href="#">
              забронировать место
            </a>
          </div>
        </div>
      </div>

      <div className="about__modal-wrapper">
        <div className="about__modal">
          <img className="about__modal-img" src="images/about2.png" alt="" />

          <div className="about__modal-content">
            <button className="about__modal-btn">Назад</button>

            <h3 className="about__modal-title">Название мероприятия (события)</h3>

            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">время</p>

            <a className="about__modal-button promo__box-link" href="#">
              забронировать место
            </a>
          </div>
        </div>
      </div>

      <div className="about__modal-wrapper">
        <div className="about__modal">
          <img className="about__modal-img" src="images/about3.png" alt="" />

          <div className="about__modal-content">
            <button className="about__modal-btn">Назад</button>

            <h3 className="about__modal-title">Название мероприятия (события)</h3>

            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">время</p>

            <a className="about__modal-button promo__box-link" href="#">
              забронировать место
            </a>
          </div>
        </div>
      </div>

      <div className="about__modal-wrapper">
        <div className="about__modal">
          <img className="about__modal-img" src="images/about1.png" alt="" />

          <div className="about__modal-content">
            <button className="about__modal-btn">Назад</button>

            <h3 className="about__modal-title">Название мероприятия (события)</h3>

            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">время</p>

            <a className="about__modal-button promo__box-link" href="#">
              забронировать место
            </a>
          </div>
        </div>
      </div>

      <div className="about__modal-wrapper">
        <div className="about__modal">
          <img className="about__modal-img" src="images/about2.png" alt="" />

          <div className="about__modal-content">
            <button className="about__modal-btn">Назад</button>

            <h3 className="about__modal-title">Название мероприятия (события)</h3>

            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">время</p>

            <a className="about__modal-button promo__box-link" href="#">
              забронировать место
            </a>
          </div>
        </div>
      </div>

      <div className="about__modal-wrapper">
        <div className="about__modal">
          <img className="about__modal-img" src="images/about3.png" alt="" />

          <div className="about__modal-content">
            <button className="about__modal-btn">Назад</button>

            <h3 className="about__modal-title">Название мероприятия (события)</h3>

            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">описание</p>
            <p className="about__modal-subtitle">время</p>

            <a className="about__modal-button promo__box-link" href="#">
              забронировать место
            </a>
          </div>
        </div>
      </div> */}

      <button
        className={clsx('about__btn', !showAll && 'rotate-btn')}
        onClick={() => setShowAll(!showAll)}>
        {!showAll && 'показать еще'}
        {showAll && 'скрыть'}
      </button>
    </div>
  );
};
