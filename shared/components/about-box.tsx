/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React from 'react';
import { AboutBoxModal } from './about-box-modal';
import Image from 'next/image';

interface Props {
  className?: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const AboutBox: React.FC<Props> = ({ className, title, description, imageUrl }) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (showModal) {
      const pelena = document.createElement('div');
      pelena.classList.add('pelena');
      document.body.style.overflowY = 'hidden';
      document.body.append(pelena);
    }
    return () => {
      document.body.style.overflowY = '';
      document.querySelector('.pelena')?.remove();
    };
  }, [showModal]);

  return (
    <>
      <div className={clsx('about__box', className)} onClick={() => setShowModal(true)}>
        <Image width={315} height={315} src={imageUrl} alt="about" className="about__box-img" />
        <div className="about__box-bottom">
          <p className="about__box-title">{title}</p>
          <img src="images/about-bottom.svg" alt="" />
        </div>
      </div>
      <AboutBoxModal
        description={description}
        title={title}
        showModal={showModal}
        setShowModal={setShowModal}
        imageUrl={imageUrl}
      />
    </>
  );
};
