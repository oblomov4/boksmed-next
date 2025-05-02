'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export const ProfileMenu: React.FC = () => {
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

        <button className="profile__right-btn" onClick={() => signOut({ redirectTo: '/' })}>
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
};
