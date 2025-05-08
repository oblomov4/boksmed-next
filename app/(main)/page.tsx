import { db } from '@/db';
import { SelectCategoryTable } from '@/db/schema';
import { Promo, Equipment, LastNews, NewItems } from '@/shared/components';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const catalog: SelectCategoryTable[] | undefined = await db.query.categories.findMany();
  return (
    <>
      <Promo />
      {catalog && <Equipment catalog={catalog} all={false} />}
      <NewItems />
      <LastNews />
    </>
  );
}
