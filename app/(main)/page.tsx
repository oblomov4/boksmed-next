import { Promo } from '@/shared/components/promo';
import { Equipment } from '@/shared/components';

export default function Home() {
  return (
    <>
      <Promo />
      <Equipment all={false} />
    </>
  );
}
