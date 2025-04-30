'use client';

import { SelectProductTable } from '@/db/schema';
import { useRouter } from 'next/navigation';

import React from 'react';

interface Props {
  name: string;
  id: number;
  setFindItem: (value: SelectProductTable[] | null) => void;
}

export const SearchFindItem: React.FC<Props> = ({ name, id, setFindItem }) => {
  const router = useRouter();

  function handleClick() {
    router.push(`/product/${id}`);
    setFindItem(null);
  }

  return (
    <div className="find-item" onClick={handleClick}>
      {name}
    </div>
  );
};
