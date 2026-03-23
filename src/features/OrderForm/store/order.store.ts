import { create } from 'zustand';
import type { OrderState } from '../types/order';

export const useOrderStore = create<OrderState>((set) => ({
  stockInfo: {
    name: 'RELIANCE',
    prices: { NSE: 1415.94, BSE: 1413.63 }
  },
  orderMode: 'Buy',
  exchange: 'NSE',
  quantity: 1,
  price: 50,
  orderType: 'Market',
  productType: 'NRML',
  availableMargin: 50000.00,

  setOrderMode: (orderMode) => set({ orderMode }),
  setExchange: (exchange) => set({ exchange }),
  setQuantity: (quantity) => set({ quantity }),
  setPrice: (price) => set({ price }),
  setOrderType: (orderType) => set({ orderType }),
  setProductType: (productType) => set({ productType }),
  resetForm: () => set(() => ({
    orderMode: 'Buy',
    exchange: 'NSE',
    quantity: 1,
    price: 50,
    orderType: 'Market',
    productType: 'NRML'
  })),
}));