import Link from 'next/link';
import React from 'react';

type LinkType = {
  id: number;
  text: string;
  link: string;
};

interface Props {
  links: Array<LinkType>;
}

export const BreadCrumps: React.FC<Props> = ({ links }) => {
  return (
    <section className="bread-crumbs">
      <div className="container">
        <div className="bread-crumbs__inner">
          {links.map((item, index) => {
            if (links.length - 1 === index) {
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  className="bread-crumbs__inner-a bread-crumbs__inner-a--active">
                  {item.text}
                </Link>
              );
            } else {
              return (
                <Link key={item.id} href={item.link} className="bread-crumbs__inner-a">
                  {item.text}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
