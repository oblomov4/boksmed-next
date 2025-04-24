/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const ProfileMenu: React.FC = () => {
  return (
    <div className="profile__right">
      <div className="profile__right-wrapper">
        <div className="profile__right-box">
          <img className="profile__right-img" src="images/profile1.svg" alt="" />
          <p className="profile__right-text">
            <a href="">Заказы</a>
          </p>
        </div>

        <div className="profile__right-box">
          <img className="profile__right-img" src="images/profile2.svg" alt="" />
          <p className="profile__right-text">
            <a href="">Рейтинг</a>
          </p>
        </div>

        <div className="profile__right-box">
          <img className="profile__right-img" src="images/profile3.svg" alt="" />
          <p className="profile__right-text">
            <a href="">Список сравнений</a>
          </p>
        </div>

        <div className="profile__right-box">
          <img className="profile__right-img" src="images/profile4.svg" alt="" />
          <p className="profile__right-text">
            <a href="">Отзывы</a>
          </p>
        </div>
      </div>

      <button id="btn-chat" className="profile__right-btn">
        <img src="images/chat-decor.svg" alt="" /> Служба поддержки (связь с продавцом)
      </button>
    </div>
  );
};
