'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

type ChooiceType = 'register' | 'guest';

export const AuthPlaceNewBuyer: React.FC = () => {
  const router = useRouter();
  const [chooice, setChooice] = React.useState<ChooiceType>('guest');

  function handleClick(): void {
    if (chooice === 'guest') {
      router.push('place-order/guest');
    } else {
      router.push('place-order/register');
    }
  }

  return (
    <div className="auth-block">
      <h2 className="auth-block__title">Новый покупатель</h2>

      <div className="auth-block__option">
        <label className="auth-block__option-label">
          <input
            type="radio"
            name="new_customer_option"
            value="guest"
            onChange={(e) => setChooice(e.target.value as 'guest')}
            defaultChecked
          />
          <div className="auth-block__option-content">
            <span className="auth-block__option-text">Оформить заказ как гость</span>
            <span className="auth-block__option-text auth-block__option-text--blue">
              Быстрое оформление заказа без создания учетной записи
            </span>
          </div>
        </label>
      </div>

      <div className="auth-block__option">
        <label className="auth-block__option-label">
          <input
            type="radio"
            name="new_customer_option"
            value="register"
            onChange={(e) => setChooice(e.target.value as 'register')}
          />
          <div className="auth-block__option-content">
            <span className="auth-block__option-text">Регистрация</span>
            <span className="auth-block__option-text auth-block__option-text--blue">
              Создайте учетную запись и используйте её для оформления заказа
            </span>
          </div>
        </label>
      </div>

      <button className="auth-block__button promo__box-link" onClick={handleClick}>
        {chooice === 'guest' ? 'Оформить заказ как гость' : 'Зарегистрироваться'}
      </button>

      <p className="auth-block__agreement">
        Нажимая на кнопку «Оформить», я соглашаюсь с условиями.
      </p>
    </div>
  );
};
