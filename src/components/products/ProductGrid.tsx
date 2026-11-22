import React from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function ProductGrid({
  products,
  columns = 4,
  className = '',
}: ProductGridProps) {
  const colClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-4 sm:gap-6 ${colClasses[columns]} ${className}`}>
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          priorityImage={idx < 4}
        />
      ))}
    </div>
  );
}
