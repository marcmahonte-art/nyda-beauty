'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Hero éditorial mobile-first — reproduit fidèlement l'image de référence :
 * - Fond ivoire satin pleine largeur
 * - Titre Playfair "L'ART DE" (obsidian) / "LA BEAUTÉ." (rose accent) + point noir
 * - Accroche Playfair
 * - Boutons capsule (pill) pleine largeur
 * - Photo équipe pleine largeur sans carte ni border-radius
 * - Signature éditoriale centrée en bas
 *
 * Sur desktop : composition split (texte gauche, photo droite).
 */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onScroll = () => {
      const img = el.querySelector<HTMLElement>('[data-parallax]');
      if (img && window.innerWidth >= 1024) {
        img.style.transform = `translateY(${window.scrollY * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative w-full bg-[#ffeee1]"
    >
      {/* =========================================================
          MOBILE layout (< lg) — colonne : texte → photo → signature
          ========================================================= */}
      <div className="relative bg-[#ffeee1] lg:hidden">
        {/* Zone texte */}
        <div className="relative px-5 pt-8 pb-8 sm:px-8">
          {/* Titre principal */}
          <h1
            id="hero-title"
            className="font-display font-normal uppercase leading-[0.94] tracking-[-0.01em] text-[#1E1D1B]"
            style={{ fontSize: 'clamp(38px, 10vw, 56px)' }}
          >
            <span className="block">Votre beauté,</span>
            <span className="block">
              <span className="text-[#D98F91]">notre signature</span>
              <span className="text-[#1E1D1B]">.</span>
            </span>
          </h1>

          {/* Diviseur */}
          <span aria-hidden="true" className="mt-5 block h-[1.5px] w-10 bg-[#D98F91]/70" />

          {/* Accroche */}
          <p className="mt-5 font-display text-[21px] leading-[1.35] font-normal text-[#393431] sm:text-[24px]">
            Révélez votre beauté.<br />
            Sublimez votre élégance.
          </p>

          {/* Boutons capsule — largeur maîtrisée comme dans la maquette */}
          <div className="mt-7 flex w-full max-w-[300px] flex-col gap-3">
            <Link
              href="/boutique"
              className="group flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#1E1D1B] px-6 font-sans text-[11px] font-semibold tracking-[0.08em] uppercase text-white transition-colors duration-300 hover:bg-[#393431]"
            >
              EXPLORER LA BOUTIQUE
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/#categories"
              className="flex h-[50px] w-full items-center justify-center rounded-full border border-[#1E1D1B] bg-transparent px-6 font-sans text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1E1D1B] transition-colors duration-300 hover:bg-[#1E1D1B] hover:text-white"
            >
              DÉCOUVRIR NOS COLLECTIONS
            </Link>
          </div>
        </div>

        {/* Photo équipe — recadrage mobile dédié, quatre visages visibles */}
        <div className="relative w-full" style={{ aspectRatio: '1.13 / 1' }}>
          <Image
            src="/images/hero/nyda-hero-team-mobile.webp"
            alt="Quatre femmes de l'équipe NYDA BEAUTY HAIR portant différentes coiffures tressées."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Signature éditoriale mobile */}
        <div className="flex flex-col items-center gap-1.5 bg-[#ffeee1] px-5 py-7">
          <div className="flex w-full items-center gap-3">
            <span aria-hidden="true" className="h-px flex-1 bg-[#E9DFD9]" />
            <span className="whitespace-nowrap font-sans text-[11px] font-semibold tracking-[0.26em] uppercase text-[#1E1D1B]">
              NYDA BEAUTY HAIR
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-[#E9DFD9]" />
          </div>
          <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#8A7168]">
            — BEAUTY ESSENTIALS —
          </span>
        </div>
      </div>

      {/* =========================================================
          DESKTOP layout (>= lg) — split : texte gauche / photo droite
          ========================================================= */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] overflow-hidden lg:block lg:-mt-[84px] lg:h-[calc(100svh-33px)] lg:max-h-[min(56.25vw,810px)] lg:min-h-[560px]">
        {/* Photographie positionnée à droite */}
        <div data-parallax className="absolute inset-0">
          <Image
            src="/images/hero/nyda-hero-team.webp"
            alt="Quatre femmes de l'équipe NYDA BEAUTY HAIR portant différentes coiffures tressées, en tenues blanches."
            fill
            priority
            sizes="(min-width: 1440px) 1440px, 100vw"
            className="object-cover object-right lg:object-right-top"
          />
          {/* Fondu ivoire à gauche pour lisibilité du texte */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#ffeee1] via-[#ffeee1]/80 to-transparent"
          />
        </div>

        {/* Contenu éditorial desktop */}
        <div className="relative z-10 flex h-full flex-col justify-start px-12 pt-[104px] pb-10 xl:px-16 xl:pt-[140px]">
          <div className="max-w-[400px] xl:max-w-[480px]">
            <h1
              id="hero-title"
              className="font-display font-normal uppercase leading-[0.94] tracking-[-0.015em] text-[#1E1D1B] lg:text-[44px] xl:text-[clamp(52px,4.5vw,70px)]"
            >
              <span className="block">Votre beauté,</span>
              <span className="block">
                <span className="text-[#B99C91]">notre signature</span>
                <span className="text-[#1E1D1B]">.</span>
              </span>
            </h1>

            <p className="mt-6 font-display text-[22px] leading-[1.35] text-[#393431] xl:text-[clamp(24px,2.2vw,32px)]">
              Révélez votre beauté.
              <br />
              Sublimez votre élégance.
            </p>

            <span aria-hidden="true" className="mt-6 block h-px w-12 bg-[#B99C91]/70" />

            <p className="mt-5 max-w-[380px] font-sans text-[14px] leading-[1.75] text-[#8A7168] xl:text-[15px]">
              Découvrez notre sélection de soins, cosmétiques et essentiels capillaires pensés
              pour révéler votre beauté au quotidien.
            </p>

            {/* Boutons desktop */}
            <div className="mt-8 flex flex-col gap-3 xl:flex-row xl:items-center xl:gap-4">
              <Link
                href="/boutique"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#1E1D1B] px-8 font-sans text-[11px] font-semibold tracking-[0.07em] uppercase text-white transition-colors duration-300 hover:bg-[#393431]"
              >
                EXPLORER LA BOUTIQUE
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/#categories"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#1E1D1B] bg-transparent px-8 font-sans text-[11px] font-semibold tracking-[0.07em] uppercase text-[#1E1D1B] transition-colors duration-300 hover:bg-[#1E1D1B] hover:text-white"
              >
                DÉCOUVRIR NOS COLLECTIONS
              </Link>
            </div>
          </div>
        </div>

        {/* Signature éditoriale desktop */}
        <div className="absolute bottom-8 left-12 z-10 flex w-[420px] items-center gap-4 xl:left-16">
          <span aria-hidden="true" className="h-px flex-1 bg-[#E9DFD9]" />
          <span className="font-sans text-[10.5px] font-medium tracking-[0.22em] whitespace-nowrap text-[#8A7168] uppercase">
            NYDA BEAUTY HAIR — BEAUTY ESSENTIALS
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#E9DFD9]" />
        </div>
      </div>
    </section>
  );
}
