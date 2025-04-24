import { BreadCrumps, ProducesiltItem } from '@/shared/components';

export default function ProducesiltPage() {
  return (
    <>
      <BreadCrumps
        links={[
          { id: 0, text: 'Главная', link: '/' },
          { id: 1, text: 'Производители', link: '/produceslit' },
        ]}
      />

      <section className="producesilt">
        <div className="container">
          <h2 className="title">Производители</h2>
          <div className="producesilt__inner">
            <ProducesiltItem />
            <ProducesiltItem />
            <ProducesiltItem />
            <ProducesiltItem />
          </div>
        </div>
      </section>
    </>
  );
}
