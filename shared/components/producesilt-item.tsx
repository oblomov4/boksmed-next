/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const ProducesiltItem: React.FC = () => {
  return (
    <div className="producesilt__box">
      <div className="producesilt__box-image-wrapper">
        <img src="images/producesilt1.png" alt="" />
      </div>
      <h3 className="producesilt__box-title">BOSTON SCIENTIFIC</h3>
      <p className="producesilt__box-subtitle">
        Производитель медицинского оборудования и расходных материалов
      </p>
      <a href="#" className="producesilt__box-link">
        перейти в каталог
      </a>
    </div>
  );
};
