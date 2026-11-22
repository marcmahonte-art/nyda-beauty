import React from 'react';
import Container from '@/components/ui/Container';

export default function BrandIntroduction() {
  return (
    <section id="philosophie" className="w-full bg-white py-20 sm:py-28 border-b border-[#E9DFD9]/50">
      <Container size="narrow" className="text-center space-y-6">
        <p className="text-xs uppercase font-medium tracking-[0.25em] text-[#8A7168]">
          NOTRE PHILOSOPHIE BEAUTÉ
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-normal text-[#1E1D1B] leading-tight max-w-2xl mx-auto">
          La beauté dépasse l&apos;apparence. <br />
          <span className="italic">Elle est l&apos;expression de vous.</span>
        </h2>

        <div className="w-12 h-[1px] bg-[#E9DFD9] mx-auto my-6" />

        <p className="font-sans text-sm sm:text-base md:text-lg text-[#393431] leading-relaxed font-light max-w-xl mx-auto">
          Chez <strong>NYDA BEAUTY HAIR</strong>, nous croyons que chaque femme mérite de se sentir belle, confiante et unique. Découvrez une sélection dédiée à votre beauté et à votre bien-être, formulée avec rigueur et passion.
        </p>
      </Container>
    </section>
  );
}
