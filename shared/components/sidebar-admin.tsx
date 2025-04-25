import React from 'react';

export const SidebarAdmin: React.FC = () => {
  return (
    <aside className="sidebar">
      <button className="sidebar__wrapper-close">
        <img className="sidebar__close" src="images/close.png" alt="" />
      </button>
      <a href="#">Список заказов</a>
      <a href="#">Данные пользователей</a>
      <a href="#">Обратная связь</a>
      <a href="#">Товары</a>
      <a href="#">Мероприятия</a>
    </aside>
  );
};
