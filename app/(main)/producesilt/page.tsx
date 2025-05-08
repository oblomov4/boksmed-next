import { db } from '@/db';
import { SelectProducesiltTable } from '@/db/schema';
import { BreadCrumps, ProducesiltItem } from '@/shared/components';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ProducesiltPage() {
  const producesilts: SelectProducesiltTable[] | undefined = await db.query.producesilts.findMany();

  if (!producesilts) {
    notFound();
  }

  return (
    <>
      <BreadCrumps
        links={[
          { id: 0, text: 'Главная', link: '/' },
          { id: 1, text: 'Производители', link: '/producesilt' },
        ]}
      />

      <section className="producesilt">
        <div className="container">
          <h2 className="title">Производители</h2>
          <div className="producesilt__inner">
            {producesilts.map((item) => (
              <Link href={`/producesilt/${item.id}`} key={item.id}>
                <ProducesiltItem
                  key={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl!}
                  description={item.description}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
