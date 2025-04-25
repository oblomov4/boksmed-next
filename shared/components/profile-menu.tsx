'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Chat } from './chat';
import Link from 'next/link';

export const ProfileMenu: React.FC = () => {
  const [showChat, setShowChat] = React.useState<boolean>(false);

  return (
    <>
      <div className="profile__right">
        <div className="profile__right-wrapper">
          <div className="profile__right-box">
            <img className="profile__right-img" src="images/profile1.svg" alt="" />
            <p className="profile__right-text">
              <Link href="/profile/orders">Заказы</Link>
            </p>
          </div>

          <div className="profile__right-box">
            <img className="profile__right-img" src="images/profile4.svg" alt="" />
            <p className="profile__right-text">
              <Link href="/profile/reviews">Отзывы</Link>
            </p>
          </div>
        </div>

        <button id="btn-chat" className="profile__right-btn" onClick={() => setShowChat(true)}>
          <img src="images/chat-decor.svg" alt="" /> Служба поддержки (связь с продавцом)
        </button>
      </div>

      <Chat showChat={showChat} setShowChat={setShowChat} />
    </>
  );
};
