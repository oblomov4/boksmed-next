import { db } from '@/db';
import { AdminReviewsTable } from '@/shared/components';

export default async function UserReviewsPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const reviews = await db.query.reviews.findMany({
    where: (orders, { eq }) => eq(orders.userId, id),
    with: {
      product: true,
    },
  });

  console.log(reviews);

  return (
    <section className="orders">
      <div className="container">
        <h2 className="title">Отзывы Пользователя</h2>

        {reviews.map((item) => (
          <AdminReviewsTable
            key={item.id}
            imageUrl={item.product?.imageUrl as string}
            title={item.product?.title as string}
            raiting={item.raiting!}
            text={item.text!}
          />
        ))}
      </div>
    </section>
  );
}
