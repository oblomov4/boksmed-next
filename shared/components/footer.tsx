import Image from 'next/image';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__one">
            <a href="index.html">
              <Image
                width={145}
                height={33}
                className="footer__one-img"
                src="images/logo.svg"
                alt="boksme"
              />
            </a>

            <ul className="footer__one-list">
              <li className="footer__one-item">
                <a href="#" className="footer__one-item-a">
                  <Image
                    width={20}
                    height={20}
                    src="images/viber.svg"
                    alt="viber"
                    className="footer__one-item-img"
                  />
                </a>
              </li>
              <li className="footer__one-item">
                <a href="#" className="footer__one-item-a">
                  <Image
                    width={20}
                    height={20}
                    src="images/telegram.svg"
                    alt="telegram"
                    className="footer__one-item-img"
                  />
                </a>
              </li>
              <li className="footer__one-item">
                <a href="#" className="footer__one-item-a">
                  <Image
                    width={20}
                    height={20}
                    src="images/whatsapp.svg"
                    alt="whatsapp"
                    className="footer__one-item-img"
                  />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer__two-list">
            <li className="footer__two-item">
              <a href="#" className="footer__two-a">
                О компании
              </a>
            </li>
            <li className="footer__two-item">
              <a href="#" className="footer__two-a">
                Производители
              </a>
            </li>
            <li className="footer__two-item">
              <a href="#" className="footer__two-a">
                Доставка
              </a>
            </li>
            <li className="footer__two-item">
              <a href="#" className="footer__two-a">
                Оплата
              </a>
            </li>
          </ul>

          <ul className="footer__three-list">
            <li className="footer__three-item">
              <a href="#" className="footer__three-a">
                Каталог
              </a>
            </li>
            <li className="footer__three-item">
              <a href="#" className="footer__three-a">
                Новости
              </a>
            </li>
            <li className="footer__three-item">
              <a href="#" className="footer__three-a">
                Реквизиты
              </a>
            </li>
            <li className="footer__three-item">
              <a href="#" className="footer__three-a">
                Контакты
              </a>
            </li>
          </ul>

          <div className="footer__right">
            <div className="footer__four">
              <a className="footer__four-a" href="order-call.html">
                Заказать обратный звонок
              </a>
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
            width={58}
            height={58}
            className="footer__wrapper-img"
            src="images/viber-big.svg"
            alt="viber"
          />
          <Image
            width={58}
            height={58}
            className="footer__wrapper-img"
            src="images/up.svg"
            alt="up"
          />
        </div>
      </div>
    </footer>
  );
};
