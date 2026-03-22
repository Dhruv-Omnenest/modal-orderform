import { cn } from '../../utils/cn';

export interface TabBarOption {
  label: string;
  value: string;
  activeColorClass?: string;
}

interface TabBarComponentProps {
  options: TabBarOption[];
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const TabBarComponent = ({ options, value, onChange, className }: TabBarComponentProps) => {
  return (
    <div className={cn("flex w-full rounded-md p-1 bg-[#EEF2F6] border border-gray-100", className)}>
      {options.map((opt) => {
        const isActive = opt.value === value;
        const defaultActiveClass = "bg-white text-gray-900 shadow";
        
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "flex-1 rounded text-sm font-semibold h-9 transition-all duration-200",
              isActive 
                ? (opt.activeColorClass || defaultActiveClass)
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
