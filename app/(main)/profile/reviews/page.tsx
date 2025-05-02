import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { BreadCrumps, ReviewsTable } from '@/shared/components';
import { db } from '@/db';
import { ItemsType } from '../orders/page';

export default async function ReviewsPage() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  const futureReviews = await db.query.futureReviews.findMany({
    where: (futureReviews, { eq }) => eq(futureReviews.userId, Number(session.user.id)),
    with: {
      orders: true,
    },
  });

  console.log(futureReviews);

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
          {futureReviews.length === 0 &&
            'У вас нет новых купленных товаров на которые вы можете оставить отзыв'}

          {futureReviews.map((item) => (
            <ReviewsTable
              key={item.id}
              futureReviewsId={item.id}
              imageUrl={(item.orders?.items as Array<ItemsType>)[0].products.imageUrl!}
              productId={(item.orders?.items as Array<ItemsType>)[0].products.id}
              title={(item.orders?.items as Array<ItemsType>)[0].products.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
