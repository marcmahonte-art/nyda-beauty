import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Sparkles, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import BoutiqueShop from '@/components/boutique/BoutiqueShop';
import { getProducts } from '@/lib/products';
import { BRAND_CONFIG } from '@/lib/constants';
import type { ProductCategory } from '@/types';

export const metadata: Metadata = {
  title: 'Boutique — Tous les produits | NYDA BEAUTY HAIR',
  description:
    'Découvrez toute la collection NYDA BEAUTY HAIR : colorations, shampoings, masques, gels coiffants et colles pour perruques à Abidjan.',
  openGraph: {
    title: 'Boutique NYDA BEAUTY HAIR — Tous les produits',
    description: 'Cosmétiques, soins capillaires, perruques et mèches de luxe en Côte d’Ivoire.',
    url: 'https://nydabeautyhair.com/boutique',
    images: ['/images/editorial/cat-perruques.jpg'],
  },
};

const VALID_CATEGORIES: ProductCategory[] = [
  'soins-capillaires',
  'perruques-meches',
  'accessoires',
];

export default async function BoutiquePage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string }>;
}) {
  const products = await getProducts();
  const params = await searchParams;
  const requested = params.categorie;
  const initialCategory = VALID_CATEGORIES.includes(requested as ProductCategory)
    ? (requested as ProductCategory)
    : 'tous';

  const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${encodeURIComponent(
    'Bonjour NYDA BEAUTY HAIR, je souhaite passer commande depuis votre boutique en ligne.'
  )}`;

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Shop Hero */}
      <section className="relative w-full bg-[#F8F4F0] border-b border-[#E9DFD9]/60 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E9DFD9] text-[#8A7168] text-xs font-medium tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#B99C91]" />
                <span>LA COLLECTION COMPLÈTE</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.05] font-normal text-[#1E1D1B] tracking-tight">
                La Boutique <br />
                <span className="italic font-normal">NYDA.</span>
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#8A7168] leading-relaxed max-w-xl font-light">
                Tous nos essentiels capillaires réunis au même endroit : colorations, shampoings, soins réparateurs, gels coiffants et adhésifs pour perruques sélectionnés avec soin.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#8A7168]">
                <span className="inline-flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#B99C91]" /> Livraison offerte dès 35 000 FCFA
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B99C91]" /> Produits sélectionnés
                </span>
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> Conseil sur WhatsApp
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full max-w-md lg:max-w-none mx-auto aspect-[4/3] rounded-[6px] overflow-hidden shadow-xl border border-white/70">
                <Image
                  src="/images/editorial/cat-perruques.jpg"
                  alt="Collection NYDA BEAUTY HAIR — Perruques et soins capillaires"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop with filters */}
      <BoutiqueShop products={products} initialCategory={initialCategory} />

      {/* WhatsApp reassurance banner */}
      <section className="w-full bg-[#FCDFE1] py-14 sm:py-16">
        <Container size="narrow" className="text-center space-y-5">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1E1D1B]">
            BESOIN D’UN CONSEIL ?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1E1D1B] font-normal">
            On vous aide à choisir.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#393431] font-light max-w-lg mx-auto">
            Notre équipe vous guide sur les textures, les teintes et les soins adaptés à votre cheveu. Commandez aussi directement sur WhatsApp.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg" className="gap-2.5 shadow-md hover:shadow-xl">
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span>ÉCRIRE À NYDA SUR WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </Container>
      </section>
    </div>
  );
}
