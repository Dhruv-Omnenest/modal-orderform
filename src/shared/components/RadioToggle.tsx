import { cn } from '../../utils/cn';

interface RadioToggleProps {
  options: { label: string; value: string; suffix?: string }[];
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const RadioToggle = ({ options, value, onChange, className }: RadioToggleProps) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {options.map((opt) => (
        <label 
          key={opt.value} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-4 h-4">
            <input
              type="radio"
              name="radio-toggle"
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="peer appearance-none w-4 h-4 rounded-full border border-gray-400 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 cursor-pointer transition-colors m-0"
            />
            <div className="absolute w-2 h-2 rounded-full bg-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
          <span className="text-sm font-medium text-gray-700 select-none flex items-center">
            {opt.label}:
            {opt.suffix && (
              <span className="ml-1 text-green-600">
                {opt.suffix}
              </span>
            )}
          </span>
        </label>
      ))}
    </div>
  );
};
