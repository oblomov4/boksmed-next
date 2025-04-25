import React from 'react';

interface Props {
  info: boolean;
}

export const AdminUsersTable: React.FC<Props> = ({ info }) => {
  return (
    <div className="admin-users-table">
      {info && (
        <>
          <div className="cell cell-title">№</div>
          <div className="cell cell-title">Пользователь</div>
          <div className="cell cell-title">данные организации</div>
          <div className="cell cell-title">ИНН</div>
          <div className="cell cell-title">статус</div>
        </>
      )}

      <div className="cell cell--decor" data-label="№">
        1
      </div>
      <div className="cell cell--decor" data-label="Пользователь">
        Суворова В.П
      </div>
      <div className="cell cell--decor" data-label="данные организации">
        ИП Суворова
      </div>
      <div className="cell cell--decor" data-label="ИНН">
        ИНН 4567894321
      </div>
      <div className="cell cell--decor" data-label="статус">
        гость
      </div>
    </div>
  );
};
