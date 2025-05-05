/* eslint-disable @next/next/no-img-element */
import { db } from '@/db';
import { BreadCrumps, Buttons, ReviewsBox } from '@/shared/components';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function ProductPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const product = await db.query.products.findFirst({
    where: (productTable, { eq, and }) =>
      and(eq(productTable.id, id), eq(productTable.visible, true)),
    with: {
      category: true,
      reviews: {
        with: {
          user: true,
        },
      },
    },
  });

  if (!product) {
    return notFound();
  }

  const { category } = product;

  const { reviews } = product;

  const count: number = reviews.reduce((sum, current) => Number(sum) + Number(current.raiting), 0);

  const countStars = Math.round(count / reviews.length);

  return (
    <>
      <BreadCrumps
        links={[
          { id: 0, text: 'Главная', link: '/' },
          { id: 1, text: 'Каталог', link: '/catalog' },
          { id: 2, text: `${category.title}`, link: `/catalog/${category.id}` },
          { id: 3, text: `${product.title}`, link: `/product/${product.id}` },
        ]}
      />
      <section className="product">
        <div className="container">
          <div className="product-details">
            <div className="product-image">
              <img src={product.imageUrl!} alt="Автоматический дефибриллятор" />

              <div className="product-image__stars">
                {Number(countStars) === 5 && (
                  <>
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                  </>
                )}

                {Number(countStars) === 4 && (
                  <>
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
                  </>
                )}

                {Number(countStars) === 3 && (
                  <>
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
                  </>
                )}

                {Number(countStars) === 2 && (
                  <>
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gold.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
                    <Image width={8} height={9} src="/images/star-gray.svg" alt="" />
                  </>
                )}

                {Number(countStars) === 1 && (
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

            <div className="product-info">
              <div className="product-info__top">
                <h1 className="product-info__title">{product.title}</h1>
              </div>
              {product.quantity <= 3 && (
                <p className="product-quantity">В наличие осталось: {product.quantity}</p>
              )}
              <p className="product-info__price">{product.price}₽</p>

              <Buttons id={id} />

              <div className="collapsible-section">
                <div className="collapsible-section__header">
                  <h2 className="collapsible-section__title">
                    <a href="#characteristic">Технические характеристики</a>
                  </h2>
                  <img src="/images/arrow-down.svg" alt="" />
                </div>
              </div>

              <div className="collapsible-section">
                <div className="collapsible-section__header">
                  <h2 className="collapsible-section__title">
                    {' '}
                    <a href="#reviews">Отзывы</a>
                  </h2>
                  <img src="/images/arrow-down.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="characteristic" id="characteristic">
        <div className="container">
          <div className="prod__inner">
            <h2 className="prod__title">Технические характеристики</h2>
            <p className="characteristic__subtitle">{product.specifications}</p>
          </div>
        </div>
      </section>
      <section className="card-reviews" id="reviews">
        <div className="container">
          <div className="prod__inner">
            <h2 className="prod__title">Отзывы</h2>

            {reviews.length === 0 && <p>Отзывов пока нету =(</p>}

            <div className="card-reviews__table">
              {reviews.map((item) => (
                <ReviewsBox
                  text={item.text!}
                  raiting={item.raiting!}
                  name={item.user!.name}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
