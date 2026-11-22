import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-[0.06em] text-xs uppercase';

  const variants = {
    primary:
      'bg-[#1E1D1B] text-white hover:bg-[#393431] active:bg-black focus-visible:ring-[#1E1D1B] shadow-sm',
    secondary:
      'bg-[#FCDFE1] text-[#1E1D1B] hover:bg-[#f8cfd2] active:bg-[#f3bec2] focus-visible:ring-[#FCDFE1]',
    outline:
      'bg-transparent border border-[#1E1D1B] text-[#1E1D1B] hover:bg-[#1E1D1B] hover:text-white focus-visible:ring-[#1E1D1B]',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20ba5a] active:bg-[#1da851] focus-visible:ring-[#25D366] shadow-sm',
    ghost:
      'bg-transparent text-[#1E1D1B] hover:bg-[#F8F4F0] focus-visible:ring-[#1E1D1B]',
  };

  const sizes = {
    sm: 'h-10 px-4 rounded-[4px]',
    md: 'h-[50px] px-6 rounded-[4px]',
    lg: 'h-[56px] px-8 rounded-[4px] text-sm',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          Chargement...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
