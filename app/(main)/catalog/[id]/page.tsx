import { db } from '@/db';
import { SelectProductTable } from '@/db/schema';
import { BreadCrumps, Filters, ProductItem } from '@/shared/components';
import Link from 'next/link';

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
        and(eq(products.categoryId, id), eq(products.visible, true)),
      orderBy: (products, { asc }) => [asc(products.price)],
    });
  } else if (sort === 'desc') {
    products = await db.query.products.findMany({
      where: (products, { eq, and }) =>
        and(eq(products.categoryId, id), eq(products.visible, true)),
      orderBy: (products, { desc }) => [desc(products.price)],
    });
  } else {
    products = await db.query.products.findMany({
      where: (products, { eq, and }) =>
        and(eq(products.categoryId, id), eq(products.visible, true)),
    });
  }

  const category = await db.query.categories.findFirst({
    where: (categoryTable, { eq }) => eq(categoryTable.id, id),
  });

  return (
    <>
      <BreadCrumps
        links={[
          { id: 0, text: 'Главная', link: '/' },
          { id: 1, text: 'Каталог', link: '/catalog' },
          { id: 2, text: `${category?.title}`, link: '/catalog' },
        ]}
      />

      <section className="products-catalog">
        <div className="container">
          <h2 className="title products-catalog__title">{category?.title}</h2>

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
              {products.map((item) => {
                if (item.quantity > 0) {
                  return (
                    <Link key={item.id} href={`/product/${item.id}`}>
                      <ProductItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl!}
                      />
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
