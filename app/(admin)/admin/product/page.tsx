import { db } from '@/db';
import { SelectCategoryTable, SelectProducesiltTable, SelectProductTable } from '@/db/schema';
import { AdminProduct, AdminProductItem } from '@/shared/components';

export default async function ProductAdminPage() {
  const categories: SelectCategoryTable[] = await db.query.categories.findMany();

  const producesilt: SelectProducesiltTable[] = await db.query.producesilts.findMany();

  const products: SelectProductTable[] = await db.query.products.findMany();

  if (categories.length === 0) {
    return <h1 className="title main-content-title">Чтобы продожить добавьте категории</h1>;
  }

  if (producesilt.length === 0) {
    return (
      <h1 className="title main-content-title">Чтобы продожить добавьте хотябы 1 производителя</h1>
    );
  }

  return (
    <>
      <h2 className="title main-content-title">Продукты</h2>

      <AdminProduct producesilt={producesilt} categories={categories} />

      {products.map((item) => (
        <AdminProductItem
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl!}
          quantity={item.quantity}
          id={item.id}
          visible={item.visible}
        />
      ))}
    </>
  );
}
