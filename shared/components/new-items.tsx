import React from 'react';
import { NewItemsSlider } from './new-items-slider';

export const NewItems: React.FC = () => {
  return (
    <section className="new">
      <div className="container">
        <h2 className="title new__title">Новинки</h2>
        <NewItemsSlider />
      </div>
    </section>
  );
};
