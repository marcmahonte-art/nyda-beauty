import React from 'react';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { BRAND_CONFIG } from '@/lib/constants';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';

export default function Footer() {
  const currentYear = 2026;

  const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${encodeURIComponent(
    'Bonjour NYDA BEAUTY HAIR, je prends contact via votre site web.'
  )}`;

  return (
    <footer className="bg-[#1E1D1B] text-white pt-16 sm:pt-20 pb-12 border-t border-[#393431]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#393431]">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-[4px] overflow-hidden bg-[#1E1D1B] border border-[#393431]/80 shadow-md shrink-0">
                <Image
                  src="/images/brand/nyda-logo-official.jpg"
                  alt="NYDA BEAUTY HAIR Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display tracking-[0.2em] text-lg font-semibold uppercase block text-white">
                  NYDA
                </span>
                <span className="font-sans text-[10px] tracking-[0.3em] text-[#8A7168] uppercase font-medium">
                  BEAUTY HAIR
                </span>
              </div>
            </div>

            <p className="text-sm text-[#E9DFD9] leading-relaxed font-light">
              Votre destination beauté et soins capillaires d’exception en Côte d’Ivoire. Révélez votre beauté, sublimez votre élégance.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#B99C91]">
              <MapPin className="w-4 h-4 shrink-0 text-[#FCDFE1]" />
              <span>{BRAND_CONFIG.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#FCDFE1] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#E9DFD9]">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors text-[#FCDFE1]">
                  Nos services
                </a>
              </li>
              <li>
                <a href="/salon" className="hover:text-white transition-colors">
                  Le salon
                </a>
              </li>
              <li>
                <a href="/boutique" className="hover:text-white transition-colors">
                  Boutique
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Informations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#FCDFE1] mb-5">
              Informations
            </h4>
            <ul className="space-y-3 text-sm text-[#E9DFD9]">
              <li>
                <a href="#philosophie" className="hover:text-white transition-colors">
                  Notre philosophie
                </a>
              </li>
              <li>
                <a href="#avantages" className="hover:text-white transition-colors">
                  Livraison & Paiement
                </a>
              </li>
              <li>
                <a href="#conseil" className="hover:text-white transition-colors">
                  Conseil personnalisé
                </a>
              </li>
              <li>
                <span className="text-[#8A7168] cursor-not-allowed">
                  Conditions Générales
                </span>
              </li>
              <li>
                <span className="text-[#8A7168] cursor-not-allowed">
                  Politique de Confidentialité
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#FCDFE1] mb-5">
              Contact & Réseaux
            </h4>
            <p className="text-xs text-[#E9DFD9] leading-relaxed mb-4">
              Notre équipe vous accompagne du lundi au samedi pour toutes vos commandes et conseils beauté.
            </p>
            <div className="space-y-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#25D366] hover:text-[#56f590] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp : {BRAND_CONFIG.displayPhone}</span>
              </a>
              <a
                href={BRAND_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#E9DFD9] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 shrink-0" />
                <span>Instagram</span>
              </a>
              <a
                href={BRAND_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#E9DFD9] hover:text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4 shrink-0" />
                <span>Facebook</span>
              </a>
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="flex items-center gap-3 text-sm text-[#E9DFD9] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{BRAND_CONFIG.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7168]">
          <p>© {currentYear} NYDA BEAUTY HAIR. Tous droits réservés.</p>
          <p className="tracking-widest uppercase text-[10px] text-[#B99C91]">
            L&apos;Art de la Beauté · Fait pour la beauté d&apos;Afrique
          </p>
        </div>
      </div>
    </footer>
  );
}
