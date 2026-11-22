'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { BRAND_CONFIG } from '@/lib/constants';

export default function WhatsAppCTA() {
  const directMessage = encodeURIComponent(
    'Bonjour NYDA BEAUTY HAIR, j’aimerais un conseil personnalisé pour choisir les produits les plus adaptés à ma beauté.'
  );
  const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${directMessage}`;

  return (
    <section id="conseil" className="w-full bg-[#FCDFE1] py-16 sm:py-24">
      <Container size="narrow" className="text-center space-y-6">
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1E1D1B]">
          ACCOMPAGNEMENT DÉDIÉ
        </span>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1E1D1B] font-normal leading-tight">
          Besoin d&apos;un conseil beauté ?
        </h2>

        <p className="font-sans text-sm sm:text-base md:text-lg text-[#393431] font-light leading-relaxed max-w-lg mx-auto">
          Notre équipe est disponible pour vous accompagner dans le choix de vos essentiels beauté, trouver votre texture idéale ou confirmer vos commandes.
        </p>

        <div className="pt-2">
          <a href={waUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="lg"
              className="gap-3 shadow-md hover:shadow-xl active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
              <span>CONTACTER NYDA SUR WHATSAPP</span>
            </Button>
          </a>
        </div>

        <p className="text-[11px] text-[#8A7168] tracking-wider uppercase pt-2">
          Réponse rapide du Lundi au Samedi · 8h00 – 19h00 (GMT)
        </p>
      </Container>
    </section>
  );
}
