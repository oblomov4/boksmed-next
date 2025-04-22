/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const SwiperPromo: React.FC = () => {
  const swiperRef = React.useRef<SwiperClass>(null);
  return (
    <Swiper
      slidesPerView={1}
      className="swiperOne"
      modules={[Navigation]}
      loop
      onBeforeInit={(swiper) => (swiperRef.current = swiper)}>
      <SwiperSlide>
        <div className="promo__box">
          <div className="promo__box-content">
            <img className="promo__box-img" src="images/promo-logo1.png" alt="logo" />
            <h2 className="promo__box-title">Ручные и автоматические дефибрилляторы «Primedic»</h2>
            <p className="promo__box-subtitle">
              что то нужно написать, может быть качество и выгодные цены..
            </p>

            <div className="promo__box-wrapper">
              <a className="promo__box-link" href="#">
                перейти в каталог
              </a>
              <div className="btn-wrapper">
                <button onClick={() => swiperRef.current?.slidePrev()}>
                  <img className="prev" src="images/prev.svg" alt="prev" />
                </button>
                <button onClick={() => swiperRef.current?.slideNext()}>
                  <img className="next" src="images/next.svg" alt="next" />
                </button>
              </div>
            </div>
          </div>
          <div className="promo__box-image-wrapper">
            <img className="promo__box-image" src="images/promo-image1.png" alt="promo-image1" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="promo__box">
          <div className="promo__box-content">
            <img className="promo__box-img" src="images/promo-logo2.png" alt="logo2" />

            <h2 className="promo__box-title">Хирургические сшивающие аппараты «Panther»</h2>
            <p className="promo__box-subtitle">
              Cтоят в одном ряду с аппаратами известных мировых производителей
            </p>

            <div className="promo__box-wrapper">
              <a className="promo__box-link" href="#">
                Подробнее
              </a>
              <div className="btn-wrapper">
                <button onClick={() => swiperRef.current?.slidePrev()}>
                  <img className="prev" src="images/prev.svg" alt="prev" />
                </button>
                <button onClick={() => swiperRef.current?.slideNext()}>
                  <img className="next" src="images/next.svg" alt="next" />
                </button>
              </div>
            </div>
          </div>
          <div className="promo__box-image-wrapper">
            <img className="promo__box-image" src="images/promo-image2.png" alt="promo-image1" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
