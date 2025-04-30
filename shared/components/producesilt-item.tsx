/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProducesiltItem: React.FC<Props> = ({ title, description, imageUrl }) => {
  return (
    <div className="producesilt__box">
      <div className="producesilt__box-image-wrapper">
        <img src={imageUrl} alt="" />
      </div>
      <h3 className="producesilt__box-title">{title}</h3>
      <p className="producesilt__box-subtitle">{description}</p>
      <p className="producesilt__box-link">
        перейти в каталог
      </p>
    </div>
  );
};
