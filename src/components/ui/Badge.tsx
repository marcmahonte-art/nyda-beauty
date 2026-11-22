import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'blush' | 'obsidian' | 'nude' | 'champagne';
  size?: 'sm' | 'md';
}

export default function Badge({
  children,
  className,
  variant = 'blush',
  size = 'sm',
  ...props
}: BadgeProps) {
  const variants = {
    blush: 'bg-[#FCDFE1] text-[#1E1D1B]',
    obsidian: 'bg-[#1E1D1B] text-white',
    nude: 'bg-[#E9DFD9] text-[#1E1D1B]',
    champagne: 'bg-[#F8F4F0] text-[#8A7168] border border-[#E9DFD9]',
  };

  const sizes = {
    sm: 'text-[10px] tracking-[0.1em] px-2.5 py-1',
    md: 'text-xs tracking-[0.08em] px-3 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium uppercase rounded-[3px]',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
