import { useOrderStore } from '../store/order.store';
import { useOrderCalculations } from '../hooks/useOrderCalculations';
import { Button } from '../../../shared/components/Button';
import { InputField } from '../../../shared/components/InputField';
import { StepperInput } from '../../../shared/components/StepperInput';
import { Dropdown } from '../../../shared/components/Dropdown';
import { TabBarComponent } from '../../../shared/components/TabBarComponent';
import { RadioToggle } from '../../../shared/components/RadioToggle';
import type { OrderType, ProductType } from '../types/order';

export const OrderForm = () => {

  const {
    stockInfo, orderMode, exchange, quantity, price, orderType, productType,
    setOrderMode, setExchange, setQuantity, setPrice, setOrderType, setProductType, resetForm
  } = useOrderStore();


  const { requiredMargin, isMarginSufficient } = useOrderCalculations();


  const availableMargin = useOrderStore((state) => state.availableMargin);

  const handleAction = () => {
    if (!isMarginSufficient) return;
    alert(`Successfully placed ${orderMode} order for ${quantity} shares of ${stockInfo.name} at ${orderType === 'Market' ? 'Market Price' : price}`);
  };

  return (
    <div className="w-[500px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-auto">

      <div className="bg-[#EEF2F6] px-5 py-4 border-b border-gray-200 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">{stockInfo.name}</h2>
          <TabBarComponent
            className="w-36 shadow-sm"
            options={[
              { label: 'Buy', value: 'Buy', activeColorClass: 'bg-blue-600 text-white shadow' },
              { label: 'Sell', value: 'Sell', activeColorClass: 'bg-red-600 text-white shadow' },
            ]}
            value={orderMode}
            onChange={(val) => setOrderMode(val as 'Buy' | 'Sell')}
          />
        </div>
        <RadioToggle
          options={[
            { label: 'NSE', value: 'NSE', suffix: stockInfo.prices.NSE.toFixed(2) },
            { label: 'BSE', value: 'BSE', suffix: stockInfo.prices.BSE.toFixed(2) }
          ]}
          value={exchange}
          onChange={(val) => setExchange(val as 'NSE' | 'BSE')}
        />
      </div>


      <div className="p-6 flex flex-col gap-7">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <StepperInput
            label="Quantity"
            value={quantity}
            onChange={setQuantity}
            min={1}
          />
          <InputField
            label="Price"
            type="number"
            value={orderType === 'Market' ? stockInfo.prices[exchange] : price}
            onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
            disabled={orderType === 'Market'}
          />
          <Dropdown
            label="Order type"
            value={orderType}
            onChange={(e) => setOrderType(e.target.value as OrderType)}
            options={[
              { label: 'Market', value: 'Market' },
              { label: 'Limit', value: 'Limit' },
              { label: 'SL', value: 'SL' },
              { label: 'SL-M', value: 'SL-M' },
            ]}
          />
          <Dropdown
            label="Product type"
            value={productType}
            onChange={(e) => setProductType(e.target.value as ProductType)}
            options={[
              { label: 'NRML', value: 'NRML' },
              { label: 'CNC', value: 'CNC' },
              { label: 'MIS', value: 'MIS' },
            ]}
          />
        </div>


        <div className="flex items-end justify-between pt-4 mt-2">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1">Required</span>
              <span className="text-sm font-semibold text-gray-900">₹ {requiredMargin.toFixed(2)}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1">Avai. Margin</span>
              <span className="text-sm font-semibold text-gray-900">₹ {availableMargin.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold px-3" onClick={resetForm}>
              Cancel
            </Button>
            <Button
              variant={orderMode === 'Buy' ? 'buy' : 'sell'}
              className="w-28 font-semibold text-base shadow-md"
              disabled={!isMarginSufficient}
              onClick={handleAction}
            >
              {orderMode}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
