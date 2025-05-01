import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logo.svg';
import Viber from '@/public/images/viber.svg';
import Telegram from '@/public/images/telegram.svg';
import Whatsapp from '@/public/images/whatsapp.svg';
import ShoppingCart from '@/public/images/shopping-cart.svg';
import Doctor from '@/public/images/doctor.svg';
import { Search } from './search';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link className="header__top-logo-link" href="/">
            <Image
              width={Logo.width}
              height={Logo.height}
              src={Logo.src}
              alt="boksmed"
              className="header__top-img"
            />
          </Link>
          <Link href="/catalog" className="header__top-catalog">
            Каталог
          </Link>

          <Search />

          <Link className="header__top-order-call" href="/call-order">
            Заказать обратный звонок
          </Link>

          <a className="header__top-phone" href="tel:+73412650877">
            8 (3412) 65-08-77
          </a>

          <ul className="header__top-list">
            <li className="header__top-list-item">
              <a className="header__top-list-a" href="#">
                <Image
                  width={Viber.width}
                  height={Viber.height}
                  className="header__top-list-img"
                  src={Viber.src}
                  alt="viber"
                />
              </a>
            </li>
            <li className="header__top-list-item">
              <a className="header__top-list-a" href="#">
                <Image
                  width={Telegram.width}
                  height={Telegram.height}
                  className="header__top-list-img"
                  src={Telegram.src}
                  alt="telegram"
                />
              </a>
            </li>
            <li className="header__top-list-item">
              <a className="header__top-list-a" href="#">
                <Image
                  width={Whatsapp.width}
                  height={Whatsapp.height}
                  className="header__top-list-img"
                  src={Whatsapp.src}
                  alt="whatsapp"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="header__bottom">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/about" className="nav__item-a">
                  О компании
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/producesilt" className="nav__item-a">
                  Производители
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/dilivery" className="nav__item-a">
                  Доставка
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/payment" className="nav__item-a">
                  Оплата
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/news" className="nav__item-a">
                  Новости
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/details" className="nav__item-a">
                  Реквизиты
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/contacts" className="nav__item-a">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="header__bottom-list">
            <li className="header__bottom-item">
              <Link href="/cart" className="header__bottom-link">
                <Image
                  width={ShoppingCart.width}
                  height={ShoppingCart.height}
                  className="header__bottom-img"
                  src={ShoppingCart.src}
                  alt="shopping-cart"
                />
                Корзина
              </Link>
            </li>

            <li className="header__bottom-item">
              <Link href="/profile" className="header__bottom-link">
                <Image
                  width={Doctor.width}
                  height={Doctor.height}
                  src={Doctor.src}
                  className="header__bottom-img"
                  alt="doctor"
                />
                Личный кабинет
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
