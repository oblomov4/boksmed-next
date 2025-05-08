import { db } from '@/db';
import { SelectProductTable } from '@/db/schema';
import { BreadCrumps, Filters, ProductItem } from '@/shared/components';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function CatalogIdPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;

  const { sort } = await searchParams;

  let products: SelectProductTable[] | [] = [];

  if (sort === 'asc') {
    products = await db.query.products.findMany({
      where: (products, { eq, and }) =>
        and(eq(products.producesiltId, id), eq(products.visible, true)),
      orderBy: (products, { asc }) => [asc(products.price)],
    });
  } else if (sort === 'desc') {
    products = await db.query.products.findMany({
      where: (products, { eq, and }) =>
        and(eq(products.producesiltId, id), eq(products.visible, true)),
      orderBy: (products, { desc }) => [desc(products.price)],
    });
  } else {
    products = await db.query.products.findMany({
      where: (products, { eq, and }) =>
        and(eq(products.producesiltId, id), eq(products.visible, true)),
    });
  }

  const producesilt = await db.query.producesilts.findFirst({
    where: (producesilt, { eq }) => eq(producesilt.id, id),
  });

  return (
    <>
      <BreadCrumps
        links={[
          { id: 0, text: 'Главная', link: '/' },
          { id: 1, text: 'Производители', link: '/produceslit' },
          { id: 2, text: `${producesilt?.title}`, link: `/produceslit/${id}` },
        ]}
      />

      <section className="products-catalog">
        <div className="container">
          <h2 className="title products-catalog__title">{producesilt?.title}</h2>

          <div className="products-catalog__info">
            <div className="products-catalog__info-left">
              <div className="products-catalog__info-finded">Найдено {products.length} модели</div>
            </div>

            <Filters />
          </div>
        </div>

        <div className="products-catalog-wrapper">
          <div className="container">
            <div className="product-list">
              {products.map((item) => (
                <Link key={item.id} href={`/product/${item.id}`}>
                  <ProductItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl!}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
