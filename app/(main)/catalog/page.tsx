import { BreadCrumps, Equipment } from '@/shared/components';

export default function CatalogPage() {
  return (
    <>
      <BreadCrumps
        links={[
          { id: 0, text: 'Главная', link: '/' },
          { id: 1, text: 'Каталог', link: '/catalog' },
        ]}
      />
      <Equipment all={true} />
    </>
  );
}
