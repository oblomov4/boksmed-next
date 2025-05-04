'use client';

import { sendTrackCode } from '@/app/actions';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

interface Props {
  id: number;
  userName: string;
  totalAmount: number;
  date: string;
  adress: string;
  number: string;
  adminStatus: string;
  defaultTrackCode: string | null;
  status: 'PENDING' | 'PAID' | 'CANCELLED';
}

export const AdminOrderListTable: React.FC<Props> = ({
  id,
  userName,
  date,
  totalAmount,
  adress,
  number,
  adminStatus,
  defaultTrackCode,
  status,
}) => {
  const newDate = date.split(' ')[0];
  const [trackCode, setTrackCode] = React.useState<string>('');
  const [changeCode, setChangeCode] = React.useState<boolean>(true);

  const [isOk, setIsOk] = React.useState<boolean>(false);

  async function handleClickSendTrack() {
    if (trackCode.length < 5) {
      return false;
    }

    const res = await sendTrackCode(id, trackCode);

    if (res) {
      setIsOk(true);
      toast('Трек код изменен');
    }
  }

  return (
    <div className="list-order-table">
      <div className="cell cell-title">№</div>
      <div className="cell cell-title">Пользователь</div>
      <div className="cell cell-title">Сумма</div>
      <div className="cell cell-title">Дата</div>
      <div className="cell cell-title">Оплата</div>
      <div className="cell cell-title">Статус</div>
      <div className="cell cell-title">Адрес доставки</div>
      <div className="cell cell-title">Номер Пользователя</div>
      <div className="cell cell-title">ТРЕК КОД</div>

      <div className="cell" data-label="№">
        {id}
      </div>
      <div className="cell" data-label="Пользователь">
        <Link href={`/admin/order-list/${id}`}> {userName}</Link>
      </div>
      <div className="cell" data-label="сумма">
        {totalAmount} р
      </div>
      <div className="cell" data-label="дата">
        {newDate}
      </div>
      <div className="cell" data-label="оплата">
        {status}
      </div>
      <div className="cell" data-label="статус">
        {!isOk ? adminStatus : 'ОБРАБОТАН'}
      </div>

      <div className="cell" data-label="адресс доставки">
        {adress}
      </div>
      <div className="cell" data-label="номер пользователя">
        {number}
      </div>
      <div className="cell" data-label="трек код">
        {defaultTrackCode && changeCode ? (
          <div className="track-box">
            <div>{defaultTrackCode}</div>
            <button onClick={() => setChangeCode(false)}>Изменить</button>
          </div>
        ) : (
          <div className="track-box">
            <input
              type="text"
              className="input-track"
              value={trackCode}
              onChange={(e) => setTrackCode(e.target.value)}
            />
            <button onClick={handleClickSendTrack}>Отправить трек!</button>
          </div>
        )}
      </div>
    </div>
  );
};
