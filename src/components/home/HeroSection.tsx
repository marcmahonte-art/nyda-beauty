'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#F8F4F0] border-b border-[#E9DFD9]/60">
      <div className="max-w-[1280px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-[#E9DFD9] text-[#8A7168] text-[11px] sm:text-xs font-medium tracking-[0.16em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B99C91] stroke-[1.5]" />
              <span>NYDA BEAUTY HAIR — ESSENTIELS BEAUTÉ</span>
            </div>

            <h1 className="font-display text-[38px] sm:text-5xl lg:text-[64px] leading-[1.08] font-normal text-[#1E1D1B] tracking-tight">
              L&apos;art de la <br />
              <span className="italic font-normal">beauté.</span>
            </h1>

            <div className="space-y-3 max-w-lg">
              <p className="font-display italic text-lg sm:text-xl text-[#393431] font-light">
                « Révélez votre beauté. Sublimez votre élégance. »
              </p>
              <p className="font-sans text-sm sm:text-base text-[#8A7168] leading-relaxed font-light">
                Soins du visage, traitements capillaires et essentiels de luxe pensés pour révéler votre éclat au quotidien, avec raffinement.
              </p>
            </div>

            {/* CTAs — Primary Obsidian / Outline Obsidian */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="/boutique">
                <Button variant="primary" size="md" className="gap-2.5 w-full sm:w-auto">
                  <span>DÉCOUVRIR LA COLLECTION</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                </Button>
              </a>
              <a href="/services">
                <Button variant="outline" size="md" className="w-full sm:w-auto">
                  <span>NOS PRESTATIONS</span>
                </Button>
              </a>
            </div>

            {/* Trust — subdued tokens only */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] sm:text-xs text-[#8A7168]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B99C91] stroke-[1.5]" /> Produits sélectionnés
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B99C91]" /> Livraison offerte dès 35 000 FCFA
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FCDFE1]" /> Basée à Abidjan
              </span>
            </div>
          </div>

          {/* Photography — clean frame, discreet shadow */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[520px] aspect-[4/5] rounded-[6px] overflow-hidden shadow-card border border-[#E9DFD9] bg-white">
              <Image
                src="/images/editorial/hero-campaign.jpg"
                alt="Portrait beauté NYDA BEAUTY HAIR — rituel de soin du visage"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transform transition-transform duration-300 hover:scale-[1.02]"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 border border-[#E9DFD9] px-3.5 py-2.5 rounded">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A7168] font-medium">
                  Nouveau rituel
                </p>
                <p className="text-xs font-display text-[#1E1D1B] mt-0.5">
                  L&apos;éclat au naturel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
