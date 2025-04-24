import Image from 'next/image';
import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="container">
      <div className="contact__first">
        <p className="contact__first-adress">Адрес: 426011 г. Ижевск, ул. Пушкинская, 290</p>
        <p className="contact__first-email">E-mail: 5078096@mail.ru</p>
      </div>
      <div className="contact__two">
        <p className="contact__two-phone">+7 982 993 90 05</p>
        <p className="contact__two-time">Время работы: пн- пт с 10:00 - 19:00</p>
        <div className="contact__two-social">
          Социальные сети
          <ul className="contact__two-ul">
            <li className="contact__two-list">
              <a href="#">
                <Image width={20} height={20} src="images/viber.svg" alt="viber" />
              </a>
            </li>
            <li className="contact__two-list">
              <a href="#">
                <Image width={20} height={20} src="images/telegram.svg" alt="telegram" />
              </a>
            </li>
            <li className="contact__two-list">
              <a href="#">
                <Image width={20} height={20} src="images/whatsapp.svg" alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
