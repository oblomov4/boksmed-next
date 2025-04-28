import Link from 'next/link';
import React from 'react';

interface Props {
  name: string;
  lastName: string;
  id: number;
  phone: string;
  inn: string;
  role: string;
}

export const AdminUsersTable: React.FC<Props> = ({ name, lastName, id, phone, inn, role }) => {
  return (
    <div className="admin-users-table">
      <div className="cell cell-title">№</div>
      <div className="cell cell-title">Пользователь</div>
      <div className="cell cell-title">Телефон</div>
      <div className="cell cell-title">ИНН</div>
      <div className="cell cell-title">статус</div>

      <div className="cell cell--decor" data-label="№">
        {id}
      </div>
      <div className="cell cell--decor" data-label="Пользователь">
        <Link href={`/admin/users/${id}`}>
          {name} {lastName}
        </Link>
      </div>
      <div className="cell cell--decor" data-label="телефон">
        {phone}
      </div>
      <div className="cell cell--decor" data-label="ИНН">
        {inn}
      </div>
      <div className="cell cell--decor" data-label="статус">
        {role}
      </div>
    </div>
  );
};
