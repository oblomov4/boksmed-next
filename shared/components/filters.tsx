'use client';

import clsx from 'clsx';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

export const Filters: React.FC = () => {
  const [showFilters, setShowFilters] = React.useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="filters">
      <button onClick={() => setShowFilters(!showFilters)}>Фильтры</button>
      <ul className={clsx('filters-list', showFilters && 'show', !showFilters && 'hidden')}>
        <li className="filters__li">
          <button
            onClick={() => {
              router.push(pathname + '?' + createQueryString('sort', 'asc'));
              setShowFilters(false);
            }}>
            По увелечению цены
          </button>
        </li>
        <li className="filters__li">
          <button
            onClick={() => {
              router.push(pathname + '?' + createQueryString('sort', 'desc'));
              setShowFilters(false);
            }}>
            По уменьшению цены
          </button>
        </li>
      </ul>
    </div>
  );
};
