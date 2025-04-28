import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface Props {
  showModal: boolean;
  title: string;
  description: string;
  setShowModal: (value: boolean) => void;
  imageUrl: string;
}

export const AboutBoxModal: React.FC<Props> = ({
  showModal,
  setShowModal,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className={clsx('about__modal-wrapper', showModal && 'active')}>
      <div className="about__modal">
        <Image width={315} height={315} className="about__modal-img" src={imageUrl} alt="" />

        <div className="about__modal-content">
          <button className="about__modal-btn" onClick={() => setShowModal(false)}>
            Назад
          </button>

          <h3 className="about__modal-title">{title}</h3>

          <p className="about__modal-subtitle">{description}</p>
        </div>
      </div>
    </div>
  );
};
