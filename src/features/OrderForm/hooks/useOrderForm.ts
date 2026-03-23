// hooks/useOrder.ts
import { useOrderStore } from '../store/order.store';
import { useShallow } from 'zustand/react/shallow';

const MARGIN_MAP: Record<string, number> = { MIS: 0.2, CNC: 1.0, NRML: 0.5 };

export const useOrder = () => {
  const state = useOrderStore(useShallow((s) => ({
    stockInfo: s.stockInfo,
    orderMode: s.orderMode,
    exchange: s.exchange,
    quantity: s.quantity,
    price: s.price,
    orderType: s.orderType,
    productType: s.productType,
    availableMargin: s.availableMargin,
    setOrderMode: s.setOrderMode,
    setExchange: s.setExchange,
    setQuantity: s.setQuantity,
    setPrice: s.setPrice,
    setOrderType: s.setOrderType,
    setProductType: s.setProductType,
    resetForm: s.resetForm,
  })));

  const effectivePrice = state.orderType === 'Market' 
    ? state.stockInfo.prices[state.exchange] 
    : state.price;

  const marginMultiplier = MARGIN_MAP[state.productType] || 1.0;
  const requiredMargin = state.quantity * effectivePrice * marginMultiplier;
  const isMarginSufficient = state.availableMargin >= requiredMargin;

  return {
    ...state,
    effectivePrice,
    requiredMargin,
    isMarginSufficient,
    missingMargin: Math.max(0, requiredMargin - state.availableMargin),
  };
};