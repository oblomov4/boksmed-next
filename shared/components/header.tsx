import Image from 'next/image';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <a className="header__top-logo-link" href="index.html">
            <Image
              width={145}
              height={33}
              src="images/logo.svg"
              alt="boksmed"
              className="header__top-img"
            />
          </a>
          <button className="header__top-catalog">Каталог</button>

          <div className="header__top-input-wrapper">
            <input
              className="header__top-input"
              type="text"
              placeholder="Поиск медицинского оборудования"
            />
          </div>

          <a className="header__top-order-call" href="order-call.html">
            Заказать обратный звонок
          </a>

          <a className="header__top-phone" href="tel:+73412650877">
            8 (3412) 65-08-77
          </a>

          <ul className="header__top-list">
            <li className="header__top-list-item">
              <a className="header__top-list-a" href="#">
                <Image
                  width={20}
                  height={20}
                  className="header__top-list-img"
                  src="images/viber.svg"
                  alt="viber"
                />
              </a>
            </li>
            <li className="header__top-list-item">
              <a className="header__top-list-a" href="#">
                <Image
                  width={20}
                  height={20}
                  className="header__top-list-img"
                  src="images/telegram.svg"
                  alt="telegram"
                />
              </a>
            </li>
            <li className="header__top-list-item">
              <a className="header__top-list-a" href="#">
                <Image
                  width={20}
                  height={20}
                  className="header__top-list-img"
                  src="images/whatsapp.svg"
                  alt="whatsapp"
                />
              </a>
            </li>
          </ul>

          {/* <div className="catalog-menu">
            <div className="catalog-menu__wrapper">
              <div className="catalog-menu-links">
                <p className="catalog-menu-link active">ДЕФИБРИЛЯТОРЫ</p>
                <p className="catalog-menu-link">РЕАНИМАЦИЯ</p>
                <p className="catalog-menu-link">КИСЛОРОДНОЕ ОБОРУДОВАНИЕ</p>
                <p className="catalog-menu-link">СШИВАЮЩИЕ ИНСТРУМЕНТЫ</p>
                <p className="catalog-menu-link">ИМПЛАНТЫ</p>
                <p className="catalog-menu-link">МЕДИЦИНСКИЙ ИНСТРУМЕНТ</p>
              </div>

              <div className="catalog-menu-right">
                <div className="catalog-menu-submenu show2">
                  <ul className="catalog-menu-submenu__ul">
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Комплектующие к дефибрилляторам
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Дефибриллятор-монитор
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Ручные
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Автоматические
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="catalog-menu-submenu">
                  <ul className="catalog-menu-submenu__ul">
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Комплектующие к дефибрилляторам
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Дефибриллятор-монитор
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Ручные
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Автоматические
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="catalog-menu-submenu">
                  <ul className="catalog-menu-submenu__ul">
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Комплектующие к дефибрилляторам
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Дефибриллятор-монитор
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Ручные
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Автоматические
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="catalog-menu-submenu">
                  <ul className="catalog-menu-submenu__ul">
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Комплектующие к дефибрилляторам
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Дефибриллятор-монитор
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Ручные
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Автоматические
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="catalog-menu-submenu">
                  <ul className="catalog-menu-submenu__ul">
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Комплектующие к дефибрилляторам
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Дефибриллятор-монитор
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Ручные
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Автоматические
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="catalog-menu-submenu">
                  <ul className="catalog-menu-submenu__ul">
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Комплектующие к дефибрилляторам
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Дефибриллятор-монитор
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Ручные
                      </a>
                    </li>
                    <li className="catalog-menu-submenu__li">
                      <a href="#" className="catalog-menu-submenu__a">
                        Автоматические
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="header__bottom">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__item-a">
                  О компании
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__item-a">
                  Производители
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__item-a">
                  Доставка
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__item-a">
                  Оплата
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__item-a">
                  Новости
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__item-a">
                  Реквизиты
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__item-a">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>

          <ul className="header__bottom-list">
            <li className="header__bottom-item">
              <a href="#" className="header__bottom-link">
                <Image
                  width={29}
                  height={21}
                  className="header__bottom-img"
                  src="images/polylines.svg"
                  alt="polylines"
                />
                Сравнения
              </a>
            </li>

            <li className="header__bottom-item">
              <a href="#" className="header__bottom-link">
                <Image
                  width={19}
                  height={19}
                  className="header__bottom-img"
                  src="images/shopping-cart.svg"
                  alt="shopping-cart"
                />
                Корзина
              </a>
            </li>

            <li className="header__bottom-item">
              <a href="#" className="header__bottom-link">
                <Image
                  width={22}
                  height={22}
                  className="header__bottom-img"
                  src="images/doctor.svg"
                  alt="doctor"
                />
                Личный кабинет
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
