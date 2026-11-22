import React from 'react';
import { Sparkles, Smartphone, CreditCard, Truck } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'BEAUTÉ & QUALITÉ',
      description: 'Une sélection de produits d’exception rigoureusement testés.',
    },
    {
      icon: Smartphone,
      title: 'COMMANDE FACILE',
      description: 'Commandez en toute fluidité depuis votre smartphone.',
    },
    {
      icon: CreditCard,
      title: 'PAIEMENT FLEXIBLE',
      description: 'Paiement sécurisé à la livraison ou via Mobile Money.',
    },
    {
      icon: Truck,
      title: 'LIVRAISON RAPIDE',
      description: 'Expédition soignée et suivie selon les zones desservies.',
    },
  ];

  return (
    <section id="avantages" className="w-full bg-white py-16 sm:py-20 border-b border-[#E9DFD9]/60">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E9DFD9]">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center px-4 sm:px-6 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F8F4F0] text-[#1E1D1B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FCDFE1]">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#1E1D1B]">
                  {benefit.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#8A7168] leading-relaxed max-w-[220px]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
