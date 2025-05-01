import { createOrder } from '@/app/actions';
import { redirect } from 'next/navigation';
import React from 'react';

interface Props {
  city: string;
  diliveryAmount: number;
  totalAmount: number;
}

export const ButtonCreateOrder: React.FC<Props> = ({ diliveryAmount, totalAmount, city }) => {
  const price = diliveryAmount + totalAmount;

  async function handleClickCreateOrder() {
    const url = await createOrder(city, price);

    redirect(url!);
  }

  return (
    <button className="promo__box-link pek-btn" onClick={handleClickCreateOrder}>
      Оплатить заказ
    </button>
  );
};
