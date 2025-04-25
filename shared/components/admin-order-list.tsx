import React from 'react';

interface Props {
  info: boolean;
}

export const AdminOrderList: React.FC<Props> = ({ info }) => {
  return (
    <div className="admin-list-order-table">
      {info && (
        <>
          <div className="cell list-order-table-title">№</div>
          <div className="cell list-order-table-title">Пользователь</div>
          <div className="cell list-order-table-title">сумма</div>
          <div className="cell list-order-table-title">дата</div>
          <div className="cell list-order-table-title">оплата</div>
          <div className="cell list-order-table-title">статус</div>
        </>
      )}

      <div className="cell list-order-cell--decor" data-label="№">
        1
      </div>
      <div className="cell list-order-cell--decor" data-label="Пользователь">
        Сурова
      </div>
      <div className="cell admin-cell--decor" data-label="сумма">
        175 500 р
      </div>
      <div className="cell admin-cell--decor" data-label="дата">
        23.05.22
      </div>
      <div className="cell admin-cell--decor" data-label="оплата">
        карта
      </div>
      <div className="cell admin-cell--decor" data-label="статус">
        обработан
      </div>
    </div>
  );
};
