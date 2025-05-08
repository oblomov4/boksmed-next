import { BreadCrumps, NewsItem } from '@/shared/components';

export const dynamic = 'force-dynamic';

export default function NewsPage() {
  return (
    <>
      <BreadCrumps
        links={[
          { id: 0, text: 'Главная', link: '/' },
          { id: 1, text: 'Новости', link: '/news' },
        ]}
      />

      <section className="news">
        <h2 className="title">Новости</h2>
        <div className="container">
          <div className="news-page__inner">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
        </div>
      </section>
    </>
  );
}
