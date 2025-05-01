import { auth } from '@/auth';
import { BreadCrumps, Cart } from '@/shared/components';

export default async function CartPage() {
  const session = await auth();

  return (
    <>
      <BreadCrumps
        links={[
          {
            id: 0,
            text: 'Главная',
            link: '/',
          },
          {
            id: 1,
            text: 'Корзина',
            link: '/cart',
          },
        ]}
      />
      <Cart session={session} />
    </>
  );
}
