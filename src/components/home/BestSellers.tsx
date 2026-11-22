'use client';

import React, { useState, useMemo } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductGrid from '@/components/products/ProductGrid';
import Button from '@/components/ui/Button';
import { Product, ProductCategory } from '@/types';

interface BestSellersProps {
  products: Product[];
}

export default function BestSellers({ products }: BestSellersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Tous les essentiels' },
    { id: 'cosmetiques', label: 'Cosmétiques' },
    { id: 'soins-capillaires', label: 'Soins capillaires' },
    { id: 'perruques-meches', label: 'Perruques & Mèches' },
    { id: 'accessoires', label: 'Accessoires' },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products.slice(0, 8);
    }
    return products.filter((p) => p.category_id === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <section id="selection" className="w-full bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="SÉLECTION INCONTOURNABLE"
          title="Les incontournables"
          subtitle="Nos essentiels beauté sélectionnés pour vous avec les plus hauts standards d'exigence."
          className="mb-10 sm:mb-12"
        />

        {/* Filter categories tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                selectedCategory === tab.id
                  ? 'bg-[#1E1D1B] text-white shadow-sm'
                  : 'bg-[#F8F4F0] text-[#8A7168] hover:bg-[#E9DFD9] hover:text-[#1E1D1B]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <ProductGrid products={filteredProducts} columns={4} />

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a href="/boutique">
            <Button variant="outline" size="md">
              VOIR TOUTE LA BOUTIQUE
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
