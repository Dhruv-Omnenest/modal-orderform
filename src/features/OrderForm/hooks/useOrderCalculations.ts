import { useOrderStore } from '../store/order.store';

// Margin percentage lookup mock
const getMarginMultiplier = (productType: string) => {
  switch (productType) {
    case 'MIS': return 0.2; // 20% margin required
    case 'CNC': return 1.0; // 100% margin required
    case 'NRML': return 0.5; // 50% margin required
    default: return 1.0;
  }
};

export const useOrderCalculations = () => {
  const quantity = useOrderStore((state) => state.quantity);
  const price = useOrderStore((state) => state.price);
  const orderType = useOrderStore((state) => state.orderType);
  const productType = useOrderStore((state) => state.productType);
  const availableMargin = useOrderStore((state) => state.availableMargin);
  const exchange = useOrderStore((state) => state.exchange);
  const stockInfo = useOrderStore((state) => state.stockInfo);

  // If Market order, calculate requirement based on current market price
  const effectivePrice = orderType === 'Market' 
    ? stockInfo.prices[exchange] 
    : price;

  const marginMultiplier = getMarginMultiplier(productType);
  
  const requiredMargin = quantity * effectivePrice * marginMultiplier;
  const isMarginSufficient = availableMargin >= requiredMargin;
  
  return {
    effectivePrice,
    requiredMargin,
    isMarginSufficient,
    missingMargin: Math.max(0, requiredMargin - availableMargin)
  };
};
