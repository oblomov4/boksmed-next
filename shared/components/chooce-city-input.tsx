import React from 'react';

interface Props {
  cities: string[];
  setInput: (value: string) => void;
  setChooiceCity: (value: string[]) => void;
}

export const ChooceCityInput: React.FC<Props> = ({ cities, setInput, setChooiceCity }) => {
  function clickElem(item: string) {
    setInput(item);
    setChooiceCity([]);
  }

  return (
    <div className="chooce-city-input-component">
      {cities?.map((item, index) => (
        <div
          className="chooce-city-input-component-elem"
          key={index}
          onClick={() => clickElem(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};
