import { forwardRef, type SelectHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: DropdownOption[];
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ className, label, id, options, ...props }, ref) => {
    const backupId = id || label.replace(/\s+/g, '-').toLowerCase();
    
    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        <label htmlFor={backupId} className="text-sm font-medium text-gray-600">
          {label}
        </label>
        <div className="relative">
          <select
            id={backupId}
            ref={ref}
            className={cn(
              "flex h-10 w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer shadow-sm transition-colors"
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    );
  }
);
Dropdown.displayName = 'Dropdown';
