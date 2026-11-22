'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCarousel from '@/components/products/ProductCarousel';
import { Product } from '@/types';

interface NewArrivalsProps {
  products: Product[];
}

export default function NewArrivals({ products }: NewArrivalsProps) {
  // Products marked as new or latest additions
  const newItems = products.filter((p) => p.is_new).concat(products.filter((p) => !p.is_new)).slice(0, 8);

  return (
    <section id="nouveautes" className="w-full bg-[#F8F4F0] py-20 sm:py-28 border-b border-[#E9DFD9]/60">
      <Container>
        <SectionHeading
          eyebrow="DERNIÈRES CRÉATIONS"
          title="Les nouveautés"
          subtitle="Découvrez nos dernières inspirations beauté pour sublimer votre routine."
          className="mb-12 sm:mb-16"
        />

        <ProductCarousel products={newItems} />
      </Container>
    </section>
  );
}
