/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

export const NewItemsSlider: React.FC = () => {
  const swiperNewRef = React.useRef<SwiperClass>(null);
  return (
    <div className="new__swiper">
      <Swiper
        slidesPerView={4}
        className="swiperTwo"
        modules={[Navigation]}
        loop
        spaceBetween={12}
        onBeforeInit={(swiper) => (swiperNewRef.current = swiper)}
        breakpoints={{
          110: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          835: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1210: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}>
        <SwiperSlide>
          <Link href={'/product/1'}>
            <div className="new__box">
              <img className="new__box-img" src="images/new1.png" alt="new1" />
              <div className="new__box-reviews-wrapper">
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
              </div>
              <p className="nex__box-art">
                арт. <span>97530</span>
              </p>
              <h3 className="new__box-title">
                АВТОМАТИЧЕСКИЙ ДЕФИБРИЛЛЯТОР PRIMEDIC HEARTSAVE PAD
              </h3>
              <p className="new__box-price">
                136 000<span>₽</span>
              </p>
              <div className="new__box-wrapper">
                <button className="new__box-cart">в корзину</button>
                <button className="new__box-buy">купить</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/product/1'}>
            <div className="new__box">
              <img className="new__box-img" src="images/new2.png" alt="new1" />
              <div className="new__box-reviews-wrapper">
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
              </div>
              <p className="nex__box-art">
                арт. <span>97530</span>
              </p>
              <h3 className="new__box-title">ДЕФИБРИЛЛЯТОР-МОНИТОР ДКИ-Н-11</h3>
              <p className="new__box-price">
                150 000<span>₽</span>
              </p>
              <div className="new__box-wrapper">
                <button className="new__box-cart">в корзину</button>
                <button className="new__box-buy">купить</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/product/1'}>
            <div className="new__box">
              <img className="new__box-img" src="images/new3.png" alt="new1" />
              <div className="new__box-reviews-wrapper">
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
              </div>
              <p className="nex__box-art">
                арт. <span>97530</span>
              </p>
              <h3 className="new__box-title">ДЕФИБРИЛЛЯТОР-МОНИТОР ДКИ-Н-11</h3>
              <p className="new__box-price">
                150 000<span>₽</span>
              </p>
              <div className="new__box-wrapper">
                <button className="new__box-cart">в корзину</button>
                <button className="new__box-buy">купить</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/product/1'}>
            <div className="new__box">
              <img className="new__box-img" src="images/new4.png" alt="new1" />
              <div className="new__box-reviews-wrapper">
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
              </div>
              <p className="nex__box-art">
                арт. <span>97530</span>
              </p>
              <h3 className="new__box-title">ДЕФИБРИЛЛЯТОР-МОНИТОР ДКИ-Н-11</h3>
              <p className="new__box-price">
                150 000<span>₽</span>
              </p>
              <div className="new__box-wrapper">
                <button className="new__box-cart">в корзину</button>
                <button className="new__box-buy">купить</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/product/1'}>
            <div className="new__box">
              <img className="new__box-img" src="images/new1.png" alt="new1" />
              <div className="new__box-reviews-wrapper">
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
              </div>
              <p className="nex__box-art">
                арт. <span>97530</span>
              </p>
              <h3 className="new__box-title">
                АВТОМАТИЧЕСКИЙ ДЕФИБРИЛЛЯТОР PRIMEDIC HEARTSAVE PAD
              </h3>
              <p className="new__box-price">
                136 000<span>₽</span>
              </p>
              <div className="new__box-wrapper">
                <button className="new__box-cart">в корзину</button>
                <button className="new__box-buy">купить</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <div className="new__box">
            <img className="new__box-img" src="images/new2.png" alt="new1" />
            <div className="new__box-reviews-wrapper">
              <img src="images/star-gold.svg" alt="star" />
              <img src="images/star-gold.svg" alt="star" />
              <img src="images/star-gold.svg" alt="star" />
              <img src="images/star-gray.svg" alt="star" />
              <img src="images/star-gray.svg" alt="star" />
            </div>
            <p className="nex__box-art">
              арт. <span>97530</span>
            </p>
            <h3 className="new__box-title">ДЕФИБРИЛЛЯТОР-МОНИТОР ДКИ-Н-11</h3>
            <p className="new__box-price">
              150 000<span>₽</span>
            </p>
            <div className="new__box-wrapper">
              <button className="new__box-cart">в корзину</button>
              <button className="new__box-buy">купить</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/product/1'}>
            <div className="new__box">
              <img className="new__box-img" src="images/new3.png" alt="new1" />
              <div className="new__box-reviews-wrapper">
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
              </div>
              <p className="nex__box-art">
                арт. <span>97530</span>
              </p>
              <h3 className="new__box-title">ДЕФИБРИЛЛЯТОР-МОНИТОР ДКИ-Н-11</h3>
              <p className="new__box-price">
                150 000<span>₽</span>
              </p>
              <div className="new__box-wrapper">
                <button className="new__box-cart">в корзину</button>
                <button className="new__box-buy">купить</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/product/1'}>
            <div className="new__box">
              <img className="new__box-img" src="images/new4.png" alt="new1" />
              <div className="new__box-reviews-wrapper">
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gold.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
                <img src="images/star-gray.svg" alt="star" />
              </div>
              <p className="nex__box-art">
                арт. <span>97530</span>
              </p>
              <h3 className="new__box-title">ДЕФИБРИЛЛЯТОР-МОНИТОР ДКИ-Н-11</h3>
              <p className="new__box-price">
                150 000<span>₽</span>
              </p>
              <div className="new__box-wrapper">
                <button className="new__box-cart">в корзину</button>
                <button className="new__box-buy">купить</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>

      <img
        className="new__prev"
        onClick={() => swiperNewRef.current?.slidePrev()}
        src="images/prev.svg"
        alt="prev"
      />
      <img
        className="new__next"
        onClick={() => swiperNewRef.current?.slideNext()}
        src="images/next.svg"
        alt="next"
      />
    </div>
  );
};
