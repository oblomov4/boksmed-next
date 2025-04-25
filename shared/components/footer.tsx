import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logo.svg';
import Viber from '@/public/images/viber.svg';
import Telegram from '@/public/images/telegram.svg';
import Whatsapp from '@/public/images/whatsapp.svg';
import ViberBig from '@/public/images/viber-big.svg';
import Up from '@/public/images/up.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__one">
            <Link href="/">
              <Image
                width={Logo.width}
                height={Logo.height}
                className="footer__one-img"
                src={Logo.src}
                alt="boksme"
              />
            </Link>

            <ul className="footer__one-list">
              <li className="footer__one-item">
                <a href="#" className="footer__one-item-a">
                  <Image
                    width={Viber.width}
                    height={Viber.height}
                    src={Viber.src}
                    alt="viber"
                    className="footer__one-item-img"
                  />
                </a>
              </li>
              <li className="footer__one-item">
                <a href="#" className="footer__one-item-a">
                  <Image
                    width={Telegram.width}
                    height={Telegram.height}
                    src={Telegram.src}
                    alt="telegram"
                    className="footer__one-item-img"
                  />
                </a>
              </li>
              <li className="footer__one-item">
                <a href="#" className="footer__one-item-a">
                  <Image
                    width={Whatsapp.width}
                    height={Whatsapp.height}
                    src={Whatsapp.src}
                    alt="whatsapp"
                    className="footer__one-item-img"
                  />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer__two-list">
            <li className="footer__two-item">
              <Link href="/about" className="footer__two-a">
                О компании
              </Link>
            </li>
            <li className="footer__two-item">
              <Link href="/producesilt" className="footer__two-a">
                Производители
              </Link>
            </li>
            <li className="footer__two-item">
              <Link href="/dilivery" className="footer__two-a">
                Доставка
              </Link>
            </li>
            <li className="footer__two-item">
              <Link href="/payment" className="footer__two-a">
                Оплата
              </Link>
            </li>
          </ul>

          <ul className="footer__three-list">
            <li className="footer__three-item">
              <Link href="/catalog" className="footer__three-a">
                Каталог
              </Link>
            </li>
            <li className="footer__three-item">
              <Link href="/news" className="footer__three-a">
                Новости
              </Link>
            </li>
            <li className="footer__three-item">
              <Link href="/details" className="footer__three-a">
                Реквизиты
              </Link>
            </li>
            <li className="footer__three-item">
              <Link href="/contacts" className="footer__three-a">
                Контакты
              </Link>
            </li>
          </ul>

          <div className="footer__right">
            <div className="footer__four">
              <Link className="footer__four-a" href="/call-order">
                Заказать обратный звонок
              </Link>
              <p className="footer__four-p">
                Россия, Удмуртская Республика 426011, г. Ижевск, ул. Пушкинская 290 тел. 8 (3412)
                65-08-77
              </p>
            </div>

            <div className="footer__five">
              <a className="footer__five-a" href="#">
                Политика конфиденциальности
              </a>
              <p className="footer__five-p">
                ООО «Boksmed» © 2015 - 2022. Сайт носит информационный характер и не является
                публичной офертой.
              </p>
            </div>
          </div>
        </div>

        <div className="footer__wrapper">
          <Image
            width={ViberBig.width}
            height={ViberBig.height}
            className="footer__wrapper-img"
            src={ViberBig.src}
            alt="viber"
          />
          <Image
            width={Up.width}
            height={Up.height}
            className="footer__wrapper-img"
            src={Up.src}
            alt="up"
          />
        </div>
      </div>
    </footer>
  );
};
