'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group">
      {/* Scroll controls (Desktop) */}
      <div className="hidden sm:flex absolute -top-14 right-0 items-center gap-2">
        <button
          onClick={() => scroll('left')}
          className="p-2 rounded-full border border-[#E9DFD9] bg-white text-[#1E1D1B] hover:bg-[#1E1D1B] hover:text-white transition-colors"
          aria-label="Faire défiler vers la gauche"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="p-2 rounded-full border border-[#E9DFD9] bg-white text-[#1E1D1B] hover:bg-[#1E1D1B] hover:text-white transition-colors"
          aria-label="Faire défiler vers la droite"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-5 px-5 sm:mx-0 sm:px-0"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[240px] sm:w-[280px] shrink-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
