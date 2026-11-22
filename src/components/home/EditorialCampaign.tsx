'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function EditorialCampaign() {
  return (
    <section className="w-full bg-[#1E1D1B] text-white py-20 sm:py-28 overflow-hidden relative border-y border-[#393431]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text on the Left (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left z-10">
            <div className="inline-flex items-center gap-2 text-[#FCDFE1] text-xs uppercase font-medium tracking-[0.25em]">
              <Sparkles className="w-4 h-4 text-[#FCDFE1]" />
              <span>L&apos;EXPÉRIENCE NYDA</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
              Votre beauté. <br />
              <span className="text-[#FCDFE1] italic font-normal">
                Votre signature.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#E9DFD9] font-light leading-relaxed max-w-lg">
              Des essentiels soigneusement sélectionnés pour accompagner votre style et révéler votre personnalité. De nos formules de soins riches aux textures de mèches les plus pures, chaque création est une promesse d’élégance durable.
            </p>

            <div className="pt-2">
              <a href="/boutique">
                <Button
                  variant="secondary"
                  size="md"
                  className="gap-2.5 shadow-lg hover:shadow-xl"
                >
                  <span>EXPLORER NOS PRODUITS</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Subtle editorial statement */}
            <div className="pt-6 border-t border-[#393431] grid grid-cols-2 gap-6 text-xs text-[#B99C91]">
              <div>
                <p className="font-display text-2xl text-white font-medium">100%</p>
                <p className="mt-1">Cheveux vierges &amp; actifs testés</p>
              </div>
              <div>
                <p className="font-display text-2xl text-white font-medium">24h/48h</p>
                <p className="mt-1">Livraison rapide sur Abidjan</p>
              </div>
            </div>
          </div>

          {/* Large Editorial Portrait on the Right (6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[3/4] rounded-[6px] overflow-hidden shadow-2xl border border-[#393431]/80">
              <Image
                src="/images/editorial/campaign-model.jpg"
                alt="Campagne Beauté NYDA — Votre beauté, votre signature"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transform transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1D1B]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
