import { BreadCrumps, Cart } from '@/shared/components';

export default function CartPage() {
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
      <Cart />
    </>
  );
}
