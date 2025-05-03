'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

export const SidebarAdmin: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <>
      <div className="admin-container-sidebar-box">
        <button className="admin-container-sidebar-btn" onClick={() => setShow(true)}>
          {'>'}
        </button>
      </div>
      <aside className={clsx('sidebar', show ? 'show' : 'hidden')}>
        <button className="sidebar__wrapper-close" onClick={() => setShow(false)}>
          <Image
            width={16}
            height={16}
            className="sidebar__close"
            src="/images/close.png"
            alt="close"
          />
        </button>
        <Link onClick={() => setShow(false)} href="/admin/order-list">
          Список заказов
        </Link>
        <Link onClick={() => setShow(false)} href="/admin/users">
          Пользователи
        </Link>
        <Link onClick={() => setShow(false)} href="/admin/product">
          Товары
        </Link>
        <Link onClick={() => setShow(false)} href="/admin/order-call">
          Запросы на звонок
        </Link>
        <Link onClick={() => setShow(false)} href="/admin/category">
          Категории
        </Link>
        <Link onClick={() => setShow(false)} href="/admin/producesilt">
          Производители
        </Link>
        <Link onClick={() => setShow(false)} href="/admin/about">
          Мероприятия
        </Link>
        <Link onClick={() => setShow(false)} href="/">
          Назад к сайту
        </Link>
      </aside>
    </>
  );
};
