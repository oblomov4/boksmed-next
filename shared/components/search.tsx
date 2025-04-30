'use client';

import { SelectProductTable } from '@/db/schema';
import React from 'react';
import { SearchFindItem } from './search-find-item';

export const Search: React.FC = () => {
  const [input, setInput] = React.useState<string>('');

  const [findItem, setFindItem] = React.useState<SelectProductTable[] | null>(null);

  async function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);

    try {
      const res = await fetch('/api/find-product/', {
        method: 'POST',
        body: JSON.stringify({ find: input }),
      });
      const data = await res.json();

      if (data.length != 0) {
        setFindItem(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log(findItem);

  return (
    <div className="header__top-input-wrapper">
      <input
        className="header__top-input"
        type="text"
        placeholder="Поиск медицинского оборудования"
        value={input}
        onChange={(e) => handleChangeInput(e)}
      />
      {findItem?.length !== 0 && findItem != null && (
        <div className="find-item-wrapper">
          {findItem?.map((item) => (
            <SearchFindItem
              setFindItem={setFindItem}
              key={item.id}
              name={item.title}
              id={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
