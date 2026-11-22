'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Check, Clock, MessageCircle, Scissors, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SALON_SERVICES, SalonCategory, SalonServiceItem } from '@/lib/services';
import { formatPriceFCFA } from '@/lib/utils';
import { BRAND_CONFIG } from '@/lib/constants';
import ServiceBookingModal from '@/components/services/ServiceBookingModal';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<{
    item: SalonServiceItem;
    categoryTitle: string;
    categoryInclusions: string;
  } | null>(null);

  const directSalonWaMsg = encodeURIComponent(
    'Bonjour NYDA BEAUTY HAIR, je souhaite me renseigner et prendre rendez-vous pour une prestation au salon de coiffure.'
  );
  const waSalonUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${directSalonWaMsg}`;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Services Hero Section */}
      <section className="relative w-full bg-[#F8F4F0] border-b border-[#E9DFD9]/60 overflow-hidden py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E9DFD9] text-[#8A7168] text-xs font-medium tracking-[0.2em] uppercase">
                <Scissors className="w-3.5 h-3.5 text-[#B99C91]" />
                <span>SALON DE COIFFURE NYDA · ABIDJAN</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-normal text-[#1E1D1B] tracking-tight">
                L’Art du Tressage &amp; <br />
                <span className="italic font-normal">du Soin Capillaire.</span>
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#8A7168] leading-relaxed max-w-lg font-light">
                Une expérience de coiffure sur-mesure pensée pour sublimer chaque femme. Mèches <strong>Outre</strong> incluses, shampooing traitant doux et finitions haute précision pour un résultat soyeux et léger.
              </p>

              {/* Guarantees pills */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs bg-white text-[#1E1D1B] px-3 py-1.5 rounded border border-[#E9DFD9] font-medium">
                  <Check className="w-3.5 h-3.5 text-green-600" /> Mèches Outre Incluses
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-white text-[#1E1D1B] px-3 py-1.5 rounded border border-[#E9DFD9] font-medium">
                  <Check className="w-3.5 h-3.5 text-green-600" /> Shampooing &amp; Brushing Inclus
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-white text-[#1E1D1B] px-3 py-1.5 rounded border border-[#E9DFD9] font-medium">
                  <Check className="w-3.5 h-3.5 text-green-600" /> Zéro tension douloureuse
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a href="#grille-tarifaire">
                  <Button variant="primary" size="md" className="gap-2 w-full sm:w-auto">
                    <span>CONSULTER LES TARIFS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="/salon">
                  <Button variant="outline" size="md" className="w-full sm:w-auto">
                    DÉCOUVRIR LE SALON
                  </Button>
                </a>
                <a href={waSalonUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="md" className="gap-2 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>RÉSERVER SUR WHATSAPP</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[16/11] rounded-[6px] overflow-hidden shadow-2xl border border-white">
                <Image
                  src="/images/editorial/salon-services.jpg"
                  alt="Salon de coiffure NYDA BEAUTY HAIR — Braids et soins d'exception"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded border border-[#E9DFD9]">
                  <p className="text-[10px] uppercase tracking-widest text-[#8A7168] font-semibold">
                    Studio Coiffure Privé
                  </p>
                  <p className="text-xs font-display font-medium text-[#1E1D1B]">
                    Excellence &amp; Confort absolu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Pricing Grid Section */}
      <section id="grille-tarifaire" className="py-20 sm:py-28 bg-white">
        <Container>
          <SectionHeading
            eyebrow="GRILLE TARIFAIRE OFFICIELLE"
            title="Nos Prestations Coiffure"
            subtitle="Des tarifs clairs, transparents et tout compris pour votre plus grand confort."
            className="mb-14 sm:mb-18"
          />

          <div className="space-y-16">
            {SALON_SERVICES.map((category: SalonCategory) => (
              <div
                key={category.id}
                className="bg-[#F8F4F0]/60 rounded-lg p-6 sm:p-8 lg:p-10 border border-[#E9DFD9] shadow-sm relative overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#E9DFD9] gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="font-display text-2xl sm:text-3xl text-[#1E1D1B] font-normal">
                        {category.title}
                      </h2>
                      {category.badge && (
                        <Badge variant="blush" size="sm">
                          {category.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[#8A7168] mt-1 max-w-xl">
                      {category.subtitle}
                    </p>
                  </div>

                  {/* Included mention banner */}
                  <div className="bg-white/90 px-4 py-2.5 rounded border border-[#E9DFD9] text-xs text-[#1E1D1B] font-medium shrink-0 self-start md:self-auto flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#B99C91] shrink-0" />
                    <span>{category.inclusions}</span>
                  </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((service: SalonServiceItem) => (
                    <div
                      key={service.id}
                      className="bg-white rounded-[6px] p-6 border border-[#E9DFD9] hover:border-[#1E1D1B]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
                    >
                      {service.popular && (
                        <div className="absolute -top-3 right-4">
                          <Badge variant="obsidian" size="sm">
                            Coup de cœur
                          </Badge>
                        </div>
                      )}

                      <div>
                        <h3 className="font-display text-lg sm:text-xl text-[#1E1D1B] font-medium group-hover:text-[#8A7168] transition-colors">
                          {service.name}
                        </h3>

                        {service.description && (
                          <p className="text-xs text-[#8A7168] leading-relaxed mt-2.5">
                            {service.description}
                          </p>
                        )}

                        {service.duration && (
                          <div className="flex items-center gap-1.5 text-[11px] text-[#B99C91] mt-3">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Durée estimée : {service.duration}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-6 mt-6 border-t border-[#E9DFD9]/60 flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#8A7168] block">
                            Tarif complet
                          </span>
                          <span className="font-sans text-lg sm:text-xl font-bold text-[#1E1D1B]">
                            {formatPriceFCFA(service.price)}
                          </span>
                        </div>

                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() =>
                            setSelectedService({
                              item: service,
                              categoryTitle: category.title,
                              categoryInclusions: category.inclusions,
                            })
                          }
                          className="shrink-0 text-[11px] tracking-wider px-4"
                        >
                          Réserver
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Salon Values & Protocol */}
      <section className="py-20 sm:py-24 bg-[#1E1D1B] text-white border-y border-[#393431]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FCDFE1] font-medium">
              LE PROTOCOLE NYDA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-white mt-2">
              Pourquoi choisir notre salon ?
            </h2>
            <p className="font-sans text-sm text-[#E9DFD9] mt-3 font-light">
              Notre engagement : allier l&apos;élégance du style à la santé irréprochable de vos cheveux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded bg-[#2a2825] border border-[#393431] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FCDFE1] text-[#1E1D1B] flex items-center justify-center">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-white font-medium">
                Mèches Outre Haut de Gamme
              </h3>
              <p className="text-xs sm:text-sm text-[#E9DFD9] leading-relaxed font-light">
                Nous sélectionnons exclusivement des mèches de la prestigieuse marque Outre, réputées pour leur toucher soyeux, leur légèreté et leur tenue sans frisottis.
              </p>
            </div>

            <div className="p-6 rounded bg-[#2a2825] border border-[#393431] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FCDFE1] text-[#1E1D1B] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-white font-medium">
                Soin &amp; Brushing Inclus
              </h3>
              <p className="text-xs sm:text-sm text-[#E9DFD9] leading-relaxed font-light">
                Pas de frais cachés. Chaque séance débute par un shampoing bienveillant suivi d&apos;un brushing doux pour préparer la fibre capillaire dans des conditions optimales.
              </p>
            </div>

            <div className="p-6 rounded bg-[#2a2825] border border-[#393431] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FCDFE1] text-[#1E1D1B] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-white font-medium">
                Protection des Bordures (Edges)
              </h3>
              <p className="text-xs sm:text-sm text-[#E9DFD9] leading-relaxed font-light">
                Nos professionnelles sont formées aux techniques anti-traction pour préserver vos tempes et garantir une pose sans douleur ni risque d&apos;alopécie.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. WhatsApp Quick Booking Banner */}
      <section className="py-16 sm:py-20 bg-[#FCDFE1] text-[#1E1D1B]">
        <Container size="narrow" className="text-center space-y-5">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1E1D1B]">
            PRISE DE RENDEZ-VOUS DIRECTE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1E1D1B] font-normal">
            Une question ou une demande personnalisée ?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#393431] font-light max-w-lg mx-auto">
            Contactez directement notre responsable salon pour choisir votre modèle, vérifier les créneaux disponibles ou demander un devis sur-mesure.
          </p>
          <div className="pt-2">
            <a href={waSalonUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="gap-2.5 shadow-md hover:shadow-xl">
                <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
                <span>ÉCRIRE AU SALON SUR WHATSAPP</span>
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Booking Modal */}
      {selectedService && (
        <ServiceBookingModal
          service={selectedService.item}
          categoryTitle={selectedService.categoryTitle}
          categoryInclusions={selectedService.categoryInclusions}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
