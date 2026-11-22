import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scissors, Sparkles, Heart, ShieldCheck, MapPin, Clock, MessageCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { SALON_SERVICES, SalonCategory } from '@/lib/services';
import { formatPriceFCFA } from '@/lib/utils';
import { BRAND_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Le Salon — Coiffure & soins capillaires | NYDA BEAUTY HAIR',
  description:
    'Le salon NYDA BEAUTY HAIR à Abidjan, Djorobité base CIE : tresses, makoussi, boho braids et soins pour cheveux naturels. Mèches incluses, sans tension douloureuse.',
  openGraph: {
    title: 'Le Salon — NYDA BEAUTY HAIR',
    description: 'Un studio de coiffure dédié à la beauté et à la santé de vos cheveux, à Abidjan.',
    url: 'https://nydabeautyhair.com/salon',
    images: ['/images/salon/salon-atelier.jpg'],
  },
};

const CATEGORY_ICONS = [Scissors, Sparkles, Heart, ShieldCheck];

export default function SalonPage() {
  const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${encodeURIComponent(
    'Bonjour NYDA BEAUTY HAIR, je souhaite prendre rendez-vous au salon et connaître vos disponibilités.'
  )}`;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="w-full bg-[#F8F4F0] border-b border-[#E9DFD9]/60">
        <div className="max-w-[1280px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-[#E9DFD9] text-[#8A7168] text-[11px] sm:text-xs font-medium tracking-[0.16em] uppercase">
                <Scissors className="w-3.5 h-3.5 text-[#B99C91] stroke-[1.5]" />
                <span>LE SALON NYDA · ABIDJAN</span>
              </div>

              <h1 className="font-display text-[38px] sm:text-5xl lg:text-[64px] leading-[1.08] font-normal text-[#1E1D1B] tracking-tight">
                L&apos;art du tressage <br />
                <span className="italic font-normal">&amp; du soin capillaire.</span>
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#8A7168] leading-relaxed max-w-lg font-light">
                Un studio où chaque prestation est pensée pour sublimer votre style tout en préservant la santé de vos cheveux. Mèches incluses, soins bienveillants et finitions haute précision.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a href="#prestations">
                  <Button variant="primary" size="md" className="gap-2.5 w-full sm:w-auto">
                    <span>DÉCOUVRIR LES PRESTATIONS</span>
                    <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                  </Button>
                </a>
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="md" className="gap-2.5 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                    <span>PRENDRE RENDEZ-VOUS</span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[500px] aspect-[4/5] rounded-[6px] overflow-hidden shadow-card border border-[#E9DFD9] bg-white">
                <Image
                  src="/images/salon/salon-hero.jpg"
                  alt="Réalisation de tresses au salon NYDA BEAUTY HAIR"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 border border-[#E9DFD9] px-3.5 py-2.5 rounded">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A7168] font-medium">Studio coiffure</p>
                  <p className="text-xs font-display text-[#1E1D1B] mt-0.5">Djorobité · Abidjan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="w-full bg-white py-14 sm:py-16 border-b border-[#E9DFD9]/60">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: Scissors, title: 'Mèches incluses', text: 'Mèches Outre sélectionnées et main-d’œuvre comprises dans le tarif affiché.' },
              { icon: Sparkles, title: 'Soin & brushing offerts', text: 'Chaque séance commence par un shampooing traitant et se termine par un brushing doux.' },
              { icon: ShieldCheck, title: 'Zéro tension douloureuse', text: 'Techniques anti-traction pour préserver vos bordures et votre confort.' },
            ].map((item) => (
              <div key={item.title} className="text-center sm:text-left space-y-3">
                <div className="w-10 h-10 mx-auto sm:mx-0 rounded-full bg-[#FCDFE1] text-[#1E1D1B] flex items-center justify-center">
                  <item.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-xl text-[#1E1D1B] font-medium">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#8A7168] leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Prestations overview */}
      <section id="prestations" className="w-full bg-[#F8F4F0] py-20 sm:py-24 border-b border-[#E9DFD9]/60">
        <Container>
          <SectionHeading
            alignment="center"
            eyebrow="NOS PRESTATIONS"
            title="Une prestation pour chaque envie"
            subtitle="Des tarifs clairs et tout compris. Retrouvez le détail complet de chaque prestation sur la page Nos services."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SALON_SERVICES.map((category: SalonCategory, idx: number) => {
              const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
              const fromPrice = Math.min(...category.items.map((item) => item.price));
              return (
                <Link
                  key={category.id}
                  href="/services#grille-tarifaire"
                  className="group bg-white rounded-[6px] border border-[#E9DFD9] p-6 flex flex-col min-h-[230px] shadow-card hover:border-[#B99C91] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FCDFE1] text-[#1E1D1B] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-display text-xl text-[#1E1D1B] font-medium">{category.title}</h3>
                  <p className="text-xs text-[#8A7168] leading-relaxed mt-2.5 flex-grow">{category.subtitle}</p>
                  <div className="mt-5 pt-4 border-t border-[#E9DFD9]/60 flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8A7168]">À partir de</span>
                      <span className="font-sans text-base font-semibold text-[#1E1D1B]">{formatPriceFCFA(fromPrice)}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#B99C91] group-hover:translate-x-1 transition-transform duration-300 stroke-[1.5]" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" size="md">VOIR TOUTE LA GRILLE TARIFAIRE</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Studio gallery — real salon photos */}
      <section className="w-full bg-white py-20 sm:py-24 border-b border-[#E9DFD9]/60">
        <Container>
          <SectionHeading
            alignment="center"
            eyebrow="DANS NOTRE STUDIO"
            title="Le savoir-faire en images"
            subtitle="Quelques instants de nos séances et réalisations au salon NYDA."
            className="mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { src: '/images/salon/salon-atelier.jpg', alt: 'Séance de tressage au salon NYDA' },
              { src: '/images/salon/salon-gallery-1.jpg', alt: 'Clientes du salon NYDA et leurs tresses' },
              { src: '/images/salon/salon-gallery-3.jpg', alt: 'Portrait d’une réalisation de tresses au salon NYDA' },
              { src: '/images/salon/salon-gallery-2.jpg', alt: 'Réalisations capillaires de l’équipe NYDA' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[3/4] rounded-[6px] overflow-hidden border border-[#E9DFD9] bg-[#F8F4F0]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Informations pratiques & rendez-vous */}
      <section className="w-full bg-[#1E1D1B] text-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FCDFE1] font-medium">NOUS TROUVER</span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-white leading-tight">
                Votre séance commence ici.
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FCDFE1] shrink-0 mt-0.5 stroke-[1.5]" />
                  <div>
                    <p className="text-sm text-white font-medium">Adresse du salon</p>
                    <p className="text-sm text-[#E9DFD9] font-light">{BRAND_CONFIG.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FCDFE1] shrink-0 mt-0.5 stroke-[1.5]" />
                  <div>
                    <p className="text-sm text-white font-medium">Disponibilité</p>
                    <p className="text-sm text-[#E9DFD9] font-light">Du lundi au samedi · 8h00 – 19h00 (GMT)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#FCDFE1] shrink-0 mt-0.5 stroke-[1.5]" />
                  <div>
                    <p className="text-sm text-white font-medium">Réservation</p>
                    <p className="text-sm text-[#E9DFD9] font-light">Sur WhatsApp : {BRAND_CONFIG.displayPhone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2a2825] border border-[#393431] rounded-[8px] p-8 sm:p-10 space-y-5">
              <h3 className="font-display text-2xl text-white font-normal">Réserver ma séance</h3>
              <p className="text-sm text-[#E9DFD9] font-light leading-relaxed">
                Écrivez-nous pour choisir votre modèle, vérifier les créneaux disponibles ou demander un devis sur-mesure.
              </p>
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="gap-2.5 w-full">
                  <MessageCircle className="w-5 h-5 stroke-[1.5]" />
                  <span>ÉCRIRE AU SALON SUR WHATSAPP</span>
                </Button>
              </a>
              <p className="text-[11px] text-[#B99C91] text-center">
                Confirmation de rendez-vous par la boutique après votre message.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
