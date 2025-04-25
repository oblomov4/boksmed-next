'use client';
import React from 'react';
import { AboutBox } from './about-box';
import clsx from 'clsx';

export const AboutWrapper: React.FC = () => {
  const [showAll, setShowAll] = React.useState<boolean>(false);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="about__wrapper">
      <div className="about__inner">
        {arr.map((item, index) => {
          if (!showAll) {
            if (index >= 6) {
              return <AboutBox key={index} className="hidden" />;
            } else {
              return <AboutBox key={index} />;
            }
          } else {
            if (index >= 6) {
              return <AboutBox key={index} className="show" />;
            } else {
              return <AboutBox key={index} />;
            }
          }
        })}
      </div>

      <button
        className={clsx('about__btn', !showAll && 'rotate-btn')}
        onClick={() => setShowAll(!showAll)}>
        {!showAll && 'показать еще'}
        {showAll && 'скрыть'}
      </button>
    </div>
  );
};
