import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, id, ...props }, ref) => {
    const backupId = id || label.replace(/\s+/g, '-').toLowerCase();
    
    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        <label htmlFor={backupId} className="text-sm font-medium text-gray-600">
          {label}
        </label>
        <input
          id={backupId}
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 transition-colors shadow-sm"
          )}
          {...props}
        />
      </div>
    );
  }
);
InputField.displayName = 'InputField';
