import { db } from '@/db';
import { SelectCategoryTable } from '@/db/schema';
import { AdminCategory, CategoryItem } from '@/shared/components';

export default async function CategoryAdminPage() {
  const categories: SelectCategoryTable[] | undefined = await db.query.categoryTable.findMany();

  console.log(categories);

  return (
    <>
      <h2 className="title main-content-title">Категории</h2>
      <AdminCategory />

      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl || ''}
        />
      ))}
    </>
  );
}
