'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Documents: React.FC = () => {
  return (
    <section className="documents">
      <div className="container">
        <ul className="documents__list">
          <li className="documents__item">
            <Image
              width={26}
              height={26}
              className="documents__item-img"
              src="images/pdf-icon.svg"
              alt="pdf-icon"
            />
            <p className="documents__item-p">
              <Link href="/pdf-file/dogovor.pdf">Договор отсрочки платежа</Link>
            </p>
          </li>

          <li className="documents__item">
            <Image
              width={26}
              height={26}
              className="documents__item-img"
              src="images/pdf-icon.svg"
              alt="pdf-icon"
            />
            <p className="documents__item-p">
              <Link href="/pdf-file/dogovor.pdf">Договор оплаты</Link>
            </p>
          </li>

          <li className="documents__item">
            <Image
              width={26}
              height={26}
              className="documents__item-img"
              src="images/pdf-icon.svg"
              alt="pdf-icon"
            />
            <p className="documents__item-p">
              <Link href="/pdf-file/dogovor.pdf">Приложение к договору</Link>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
