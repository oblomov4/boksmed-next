import { db } from '@/db';
import { SelectProducesiltTable } from '@/db/schema';
import { AdminProducesilt, ProducesiltAdminItem } from '@/shared/components';

export default async function ProducesiltAdminPage() {
  const producesilts: SelectProducesiltTable[] | undefined =
    await db.query.producesilts.findMany();

  console.log(producesilts);

  return (
    <>
      <h2 className="title main-content-title">Производители</h2>
      <AdminProducesilt />

      {producesilts.map((item) => (
        <ProducesiltAdminItem
          imageUrl={item.imageUrl!}
          id={item.id}
          description={item.description}
          key={item.id}
          title={item.title}
        />
      ))}
    </>
  );
}
