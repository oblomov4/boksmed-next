import Link from 'next/link';
import React from 'react';

export const SidebarAdmin: React.FC = () => {
  return (
    <aside className="sidebar">
      {/* <button className="sidebar__wrapper-close">
        <img className="sidebar__close" src="images/close.png" alt="" />
      </button> */}
      <a href="#">Список заказов</a>
      <Link href="/admin/users">Пользователи</Link>
      <Link href="/admin/product">Товары</Link>
      <Link href="/admin/order-call">Запросы на звонок</Link>
      <Link href="/admin/category">Категории</Link>
      <Link href="/admin/producesilt">Производители</Link>
      <Link href="/admin/about">Мероприятия</Link>
      <Link href="/">Назад к сайту</Link>
    </aside>
  );
};
