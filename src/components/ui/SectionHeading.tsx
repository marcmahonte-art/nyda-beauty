import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  theme = 'light',
  className,
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'max-w-2xl',
        alignment === 'center' && 'mx-auto text-center',
        alignment === 'left' && 'text-left',
        alignment === 'right' && 'ml-auto text-right',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-[11px] sm:text-xs uppercase font-medium tracking-[0.2em] mb-2 sm:mb-3',
            isDark ? 'text-[#FCDFE1]' : 'text-[#8A7168]'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-normal tracking-tight',
          isDark ? 'text-white' : 'text-[#1E1D1B]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 sm:mt-4 text-sm sm:text-base font-light leading-relaxed',
            isDark ? 'text-[#E9DFD9]' : 'text-[#8A7168]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
