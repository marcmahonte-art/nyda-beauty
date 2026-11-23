import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Hero éditorial — « The Art of Beauty »
 *
 * Composition de référence : texte à gauche sur fond ivoire, photographie de
 * l'équipe (quatre femmes) à droite, drapés de satin rose poudré. La photo
 * remonte sous l'en-tête transparent pour former une seule surface continue.
 * Tous les textes restent du HTML accessible et éditable.
 */
export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative w-full bg-[#F8F4F0]">
      {/*
        Desktop : le panneau remonte de 84 px sous l'en-tête (transparent sur
        l'accueil) et sa hauteur est plafonnée au format 16/9 de la photo afin
        de ne jamais recadrer les quatre portraits.
      */}
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden pb-[78vw] sm:pb-[440px] lg:-mt-[84px] lg:h-[calc(100svh-33px)] lg:max-h-[min(56.25vw,810px)] lg:min-h-[560px] lg:pb-0">
        {/* Photographie de marque — asset officiel, proportions préservées */}
        <div className="absolute inset-x-0 bottom-0 h-[78vw] sm:h-[440px] lg:inset-0 lg:h-full">
          <Image
            src="/images/hero/nyda-hero-team.webp"
            alt="Quatre femmes de l’équipe NYDA BEAUTY HAIR portant différentes coiffures tressées, en tenues blanches."
            fill
            priority
            sizes="(min-width: 1440px) 1440px, 100vw"
            className="object-cover object-right lg:object-right-top"
          />
          {/* Fondu ivoire : raccord doux entre le texte et la photo en version empilée */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#F8F4F0] to-transparent sm:h-20 lg:hidden"
          />
        </div>

        {/* Contenu éditorial */}
        <div className="relative z-10 flex flex-col px-5 pt-8 pb-10 sm:px-8 sm:pt-10 lg:h-full lg:justify-start lg:px-12 lg:pt-[104px] lg:pb-10 xl:px-16 xl:pt-[140px]">
          <div className="max-w-[440px] lg:max-w-[340px] xl:max-w-[470px]">
            <h1
              id="hero-title"
              className="font-display text-[38px] leading-[0.94] font-normal tracking-[-0.015em] text-[#1E1D1B] uppercase sm:text-[54px] md:text-[58px] lg:text-[44px] xl:text-[clamp(64px,5.5vw,80px)]"
            >
              <span className="block">L&apos;art de</span>
              <span className="block">
                <span className="text-[#B99C91]">la beauté</span>
                <span className="text-[#1E1D1B]">.</span>
              </span>
            </h1>

            <p className="mt-5 font-display text-[24px] leading-[1.3] text-[#393431] sm:mt-6 sm:text-[28px] lg:mt-5 lg:text-[21px] xl:mt-6 xl:text-[clamp(26px,2.5vw,36px)]">
              Révélez votre beauté.
              <br />
              Sublimez votre élégance.
            </p>

            <span
              aria-hidden="true"
              className="mt-6 block h-px w-14 bg-[#B99C91]/70 sm:mt-7 lg:mt-5 xl:mt-7"
            />

            <p className="mt-5 max-w-[400px] font-sans text-[15px] leading-[1.75] text-[#8A7168] sm:mt-6 lg:mt-4 lg:text-[14px] lg:leading-[1.65] xl:mt-6 xl:text-base xl:leading-[1.75]">
              Découvrez notre sélection de soins, cosmétiques et essentiels capillaires pensés
              pour révéler votre beauté au quotidien.
            </p>

            {/* Actions — Primary Obsidian / Outline Obsidian */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-6 lg:flex-col lg:items-stretch xl:mt-9 xl:flex-row xl:items-center">
              <Link
                href="/boutique"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[4px] bg-[#1E1D1B] px-6 font-sans text-[11px] font-medium tracking-[0.06em] whitespace-nowrap text-white uppercase transition-colors duration-300 hover:bg-[#393431] focus-visible:ring-2 focus-visible:ring-[#1E1D1B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F4F0] focus-visible:outline-none active:bg-black"
              >
                <span>Explorer la boutique</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/#categories"
                className="inline-flex h-[52px] items-center justify-center rounded-[4px] border border-[#1E1D1B] bg-transparent px-6 font-sans text-[11px] font-medium tracking-[0.06em] whitespace-nowrap text-[#1E1D1B] uppercase transition-colors duration-300 hover:bg-[#1E1D1B] hover:text-white focus-visible:ring-2 focus-visible:ring-[#1E1D1B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F4F0] focus-visible:outline-none active:bg-black active:text-white"
              >
                Découvrir nos collections
              </Link>
            </div>
          </div>
        </div>

        {/* Signature éditoriale basse — desktop large uniquement */}
        <div className="absolute bottom-8 left-12 z-10 hidden w-[420px] items-center gap-4 xl:left-16 xl:flex">
          <span aria-hidden="true" className="h-px flex-1 bg-[#E9DFD9]" />
          <span className="font-sans text-[10.5px] font-medium tracking-[0.22em] whitespace-nowrap text-[#8A7168] uppercase">
            NYDA Beauty Hair — Beauty Essentials
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#E9DFD9]" />
        </div>
      </div>
    </section>
  );
}
