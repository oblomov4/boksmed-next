import { BreadCrumps, ReviewsItemWrapper } from '@/shared/components';

export default function ReviewsPage() {
  return (
    <>
      <BreadCrumps
        links={[
          {
            id: 0,
            text: 'Гланая',
            link: '/',
          },
          {
            id: 1,
            text: 'Личный кабинет',
            link: '/profile',
          },
          {
            id: 2,
            text: 'Отзывы',
            link: '/profile/reviews',
          },
        ]}
      />

      <section className="reviews">
        <div className="container">
          <h2 className="title">Отзывы</h2>
          <ReviewsItemWrapper />
        </div>
      </section>
    </>
  );
}
