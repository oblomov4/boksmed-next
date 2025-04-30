import { db } from '@/db';
import { SelectCategoryTable } from '@/db/schema';
import { BreadCrumps, Equipment } from '@/shared/components';

export default async function CatalogPage() {
  const catalog: SelectCategoryTable[] | undefined = await db.query.categories.findMany();

  return (
    <>
      <BreadCrumps
        links={[
          { id: 0, text: 'Главная', link: '/' },
          { id: 1, text: 'Каталог', link: '/catalog' },
        ]}
      />
      <Equipment catalog={catalog} all={true} />
    </>
  );
}
