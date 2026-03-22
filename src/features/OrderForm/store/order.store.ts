import { create } from 'zustand';
import type { OrderState, OrderMode, Exchange, OrderType, ProductType } from '../types/order';

const initialState = {
  stockInfo: {
    name: 'RELIANCE',
    prices: {
      NSE: 1415.94,
      BSE: 1413.63,
    }
  },
  orderMode: 'Buy' as OrderMode,
  exchange: 'NSE' as Exchange,
  quantity: 1,
  price: 50,
  orderType: 'Market' as OrderType,
  productType: 'NRML' as ProductType,
  availableMargin: 50000.00,
};

export const useOrderStore = create<OrderState>((set) => ({
  ...initialState,
  
  setOrderMode: (mode) => set({ orderMode: mode }),
  setExchange: (exchange) => set({ exchange }),
  setQuantity: (qty) => set({ quantity: qty }),
  setPrice: (price) => set({ price }),
  setOrderType: (type) => set({ orderType: type }),
  setProductType: (type) => set({ productType: type }),
  
  resetForm: () => set((state) => ({
    ...initialState,
    stockInfo: state.stockInfo,
    availableMargin: state.availableMargin
  })),
}));
