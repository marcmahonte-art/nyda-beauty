import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services — Salon de coiffure & soins | NYDA BEAUTY HAIR',
  description:
    'Découvrez nos prestations de coiffure à Abidjan : braids, makoussi, boho braids et soins pour cheveux naturels, avec tarifs clairs et réservation sur WhatsApp.',
  openGraph: {
    title: 'Nos Services — NYDA BEAUTY HAIR',
    description: 'Nos prestations coiffure et soins capillaires à Abidjan, Côte d’Ivoire.',
    url: 'https://nydabeautyhair.com/services',
    images: ['/images/editorial/salon-services.jpg'],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
