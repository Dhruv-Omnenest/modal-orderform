import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'buy' | 'sell' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'buy', fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          'h-10 py-2 px-4 shadow-sm',
          {
            'bg-green-600 text-white hover:bg-green-700': variant === 'buy',
            'bg-red-600 text-white hover:bg-red-700': variant === 'sell',
            'border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 shadow-none': variant === 'outline',
            'bg-transparent hover:bg-gray-100 text-gray-700 shadow-none': variant === 'ghost',
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
