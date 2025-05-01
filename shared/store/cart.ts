import { SelectProductTable } from '@/db/schema';
import { create } from 'zustand';
/* eslint-disable @typescript-eslint/no-explicit-any */

export type ItemsType = {
  cartId?: number;
  createdAt?: string;
  id?: number;
  productId?: number;
  products?: SelectProductTable;
  quantity?: number;
  updatedAt?: string;
};

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: Array<ItemsType>;

  /* Получение товаров из корзины */
  fetchCartItems: () => Promise<void>;

  /* Запрос на обновление количества товара */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  /* Запрос на добавление товара в корзину */
  addCartItem: (values: any) => Promise<void>;

  /* Запрос на удаление товара из корзины */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const res = await fetch('/api/cart');

      const data = await res.json();
      set({ items: data.cartsItems as Array<ItemsType>, totalAmount: data.totalAmount });
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });

      const res = await fetch(`/api/cart/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ quantity: quantity }),
      });

      const data = await res.json();

      set({ items: data.cartsItems as Array<ItemsType>, totalAmount: data.totalAmount });
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {
    try {
      set((state) => ({
        loading: true,
        error: false,
        items: state.items.map((item) => (item.id === id ? { ...item, disabled: true } : item)),
      }));
      // const data = await Api.cart.removeCartItem(id);
      // set(getCartDetails(data));

      const res = await fetch(`/api/cart/${id}/`, {
        method: 'DELETE',
      });

      const data = await res.json();

      set({ items: data.cartsItems as Array<ItemsType>, totalAmount: data.totalAmount });
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set((state) => ({
        loading: false,
        items: state.items.map((item) => ({ ...item, disabled: false })),
      }));
    }
  },

  addCartItem: async (values: any) => {
    try {
      set({ loading: true, error: false });
      const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ id: values }),
      });
      const data = await res.json();

      set({ items: data.cartsItems as Array<ItemsType>, totalAmount: data.totalAmount });
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
