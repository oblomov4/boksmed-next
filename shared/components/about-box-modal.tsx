/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React from 'react';

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const AboutBoxModal: React.FC<Props> = ({ showModal, setShowModal }) => {
  return (
    <div className={clsx('about__modal-wrapper', showModal && 'active')}>
      <div className="about__modal">
        <img className="about__modal-img" src="images/about1.png" alt="" />

        <div className="about__modal-content">
          <button className="about__modal-btn" onClick={() => setShowModal(false)}>
            Назад
          </button>

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
  );
};
