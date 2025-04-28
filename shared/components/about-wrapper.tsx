'use client';
import React from 'react';
import { AboutBox } from './about-box';
import clsx from 'clsx';
import { SelectEventsTable } from '@/db/schema';

interface Props {
  events: SelectEventsTable[];
}

export const AboutWrapper: React.FC<Props> = ({ events }) => {
  const [showAll, setShowAll] = React.useState<boolean>(false);

  return (
    <div className="about__wrapper">
      <div className="about__inner">
        {events.map((item, index) => {
          if (!showAll) {
            if (index >= 6) {
              return (
                <AboutBox
                  imageUrl={item.imageUrl!}
                  description={item.description}
                  title={item.title}
                  key={index}
                  className="hidden"
                />
              );
            } else {
              return (
                <AboutBox
                  imageUrl={item.imageUrl!}
                  description={item.description}
                  title={item.title}
                  key={index}
                />
              );
            }
          } else {
            if (index >= 6) {
              return (
                <AboutBox
                  imageUrl={item.imageUrl!}
                  description={item.description}
                  title={item.title}
                  key={index}
                  className="show"
                />
              );
            } else {
              return (
                <AboutBox
                  imageUrl={item.imageUrl!}
                  description={item.description}
                  title={item.title}
                  key={index}
                />
              );
            }
          }
        })}
      </div>

      {events.length >= 6 && (
        <button
          className={clsx('about__btn', !showAll && 'rotate-btn')}
          onClick={() => setShowAll(!showAll)}>
          {!showAll && 'показать еще'}
          {showAll && 'скрыть'}
        </button>
      )}
    </div>
  );
};
