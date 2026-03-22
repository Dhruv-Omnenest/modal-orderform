export type OrderMode = 'Buy' | 'Sell';
export type Exchange = 'NSE' | 'BSE';
export type OrderType = 'Market' | 'Limit' | 'SL' | 'SL-M';
export type ProductType = 'NRML' | 'CNC' | 'MIS';

export interface StockInfo {
  name: string;
  prices: {
    NSE: number;
    BSE: number;
  };
}

export interface OrderState {
  stockInfo: StockInfo;
  orderMode: OrderMode;
  exchange: Exchange;
  quantity: number;
  price: number;
  orderType: OrderType;
  productType: ProductType;
  availableMargin: number;
  

  setOrderMode: (mode: OrderMode) => void;
  setExchange: (exchange: Exchange) => void;
  setQuantity: (qty: number) => void;
  setPrice: (price: number) => void;
  setOrderType: (type: OrderType) => void;
  setProductType: (type: ProductType) => void;
  resetForm: () => void;
}
