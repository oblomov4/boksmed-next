import React from 'react';
import Image from 'next/image';
interface Props {
  className?: string;
  name: string;
  text: string;
  raiting: string;
}

export const ReviewsBox: React.FC<Props> = ({ name, text, raiting }) => {
  return (
    <div className="card-reviews__box">
      <div className="card-reviews__box-top">
        <p className="card-reviews__box-name">{name}</p>

        <div className="card-reviews__box-stars">
          {Number(raiting) === 5 && (
            <>
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
            </>
          )}

          {Number(raiting) === 4 && (
            <>
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
            </>
          )}

          {Number(raiting) === 3 && (
            <>
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
            </>
          )}

          {Number(raiting) === 2 && (
            <>
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
            </>
          )}

          {Number(raiting) === 1 && (
            <>
              <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
              <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
            </>
          )}
        </div>
      </div>

      <p className="card-reviews__box-subtitle">{text}</p>
    </div>
  );
};
