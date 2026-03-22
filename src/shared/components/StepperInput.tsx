import { Minus, Plus } from 'lucide-react';

interface StepperInputProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
}

export const StepperInput = ({ label, value, onChange, min = 1, max }: StepperInputProps) => {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };
  
  const handleIncrement = () => {
    if (max === undefined || value < max) onChange(value + 1);
  };
  
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <div className="flex h-10 w-full rounded-md border border-gray-300 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-colors shadow-sm">
        <button 
          type="button"
          onClick={handleDecrement}
          disabled={value <= min}
          className="flex items-center justify-center px-3 text-gray-500 hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 transition-colors"
        >
          <Minus size={18} />
        </button>
        <input
          type="number"
          value={value === 0 && min > 0 ? '' : value}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (!isNaN(val)) onChange(val);
            else if (e.target.value === '') onChange(0);
          }}
          onBlur={() => {
            if (value < min) onChange(min);
            if (max !== undefined && value > max) onChange(max);
          }}
          className="flex-1 w-full text-center text-gray-900 text-sm focus:outline-none appearance-none"
          style={{ MozAppearance: 'textfield' }}
        />
        <button 
          type="button"
          onClick={handleIncrement}
          disabled={max !== undefined && value >= max}
          className="flex items-center justify-center px-3 text-gray-500 hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 transition-colors"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
};
