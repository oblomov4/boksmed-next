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
      <a href="#">Обратная связь</a>
      <a href="#">Товары</a>
      <a href="#">Мероприятия</a>
    </aside>
  );
};
