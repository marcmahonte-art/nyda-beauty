'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  count: string;
}

export default function CategorySection() {
  const categories: CategoryItem[] = [
    {
      id: 'cosmetiques',
      title: 'COSMÉTIQUES',
      subtitle: 'Prenez soin de votre peau avec élégance.',
      image: '/images/editorial/cat-cosmetiques.jpg',
      href: '#cosmetiques',
      count: 'Sérums & Soins Visage',
    },
    {
      id: 'soins-capillaires',
      title: 'SOINS CAPILLAIRES',
      subtitle: 'Révélez la beauté naturelle de vos cheveux.',
      image: '/images/editorial/cat-soins-capillaires.jpg',
      href: '#soins-capillaires',
      count: 'Traitements & Huiles',
    },
    {
      id: 'perruques-meches',
      title: 'PERRUQUES & MÈCHES',
      subtitle: 'Changez de style, affirmez votre élégance.',
      image: '/images/editorial/cat-perruques.jpg',
      href: '#perruques-meches',
      count: 'HD Lace & Raw Hair',
    },
  ];

  return (
    <section id="categories" className="w-full bg-[#F8F4F0] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="NOS UNIVERS SIGNATURE"
          title="Explorez notre univers"
          subtitle="Tous vos essentiels beauté, réunis au même endroit."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative flex flex-col bg-white rounded-[6px] overflow-hidden border border-[#E9DFD9] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container (4:5 ratio) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E9DFD9]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Text overlay at bottom of card */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-1.5">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-[#FCDFE1]">
                    {cat.count}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-normal tracking-wide text-white">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#E9DFD9] font-light leading-relaxed">
                    {cat.subtitle}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FCDFE1] group-hover:translate-x-1 transition-transform">
                    <span>DÉCOUVRIR</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
