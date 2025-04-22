import { Promo, Equipment, LastNews, NewItems } from '@/shared/components';

export default function Home() {
  return (
    <>
      <Promo />
      <Equipment all={false} />
      <NewItems />
      <LastNews />
    </>
  );
}
