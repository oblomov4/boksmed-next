import React from 'react';
import clsx from 'clsx';

interface Props {
  showChat: boolean;
  setShowChat: (value: boolean) => void;
}

export const Chat: React.FC<Props> = ({ showChat, setShowChat }) => {
  return (
    <div className={clsx('chat', showChat && 'active')}>
      <div className="container">
        <div className="chat__wrapper">
          <div className="chat__box">
            <a href="index.html">
              <img src="images/chat-logo.svg" alt="" className="chat__box-logo" />
            </a>
            <h3 className="chat__box-title">Служба поддержки</h3>

            <div className="chat__box-inner">
              <div className="chat__box-message">
                <div className="message-shop message">
                  <span className="message-shop-name">Поддержка bosmed</span>
                  <p className="message-shopt-text">
                    Добрый день, .. имя человека. Чем мы можем вам помочь?
                  </p>
                  <span className="message-shop-time">17:35</span>
                </div>

                <div className="message-user message">
                  <span className="message-user-name">Вы</span>
                  <p className="message-suser-text">Хочу сделать заказ</p>
                  <span className="message-shop-time">17:35</span>
                </div>

                <div className="message-user message">
                  <span className="message-user-name">Вы</span>
                  <p className="message-suser-text">Хочу сделать заказ</p>
                  <span className="message-shop-time">17:35</span>
                </div>

                <div className="message-user message">
                  <span className="message-user-name">Вы</span>
                  <p className="message-suser-text">Хочу сделать заказ</p>
                  <span className="message-shop-time">17:35</span>
                </div>

                <div className="message-user message">
                  <span className="message-user-name">Вы</span>
                  <p className="message-suser-text">Хочу сделать заказ</p>
                  <span className="message-shop-time">17:35</span>
                </div>

                <div className="message-user message">
                  <span className="message-user-name">Вы</span>
                  <p className="message-suser-text">Хочу сделать заказ</p>
                  <span className="message-shop-time">17:35</span>
                </div>

                <div className="message-user message">
                  <span className="message-user-name">Вы</span>
                  <p className="message-suser-text">Хочу сделать заказ</p>
                  <span className="message-shop-time">17:35</span>
                </div>
              </div>

              <textarea
                placeholder="Введите сообщение..."
                className="chat__box-textarea"></textarea>

              <button className="chat__box-btn promo__box-link">Отправить</button>
            </div>
            <button id="chat-exit" className="chat__exit" onClick={() => setShowChat(false)}>
              Х
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
