'use client';

import React from 'react';
import Image from 'next/image';
import { X, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { BRAND_CONFIG } from '@/lib/constants';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export default function MobileNavigation({
  isOpen,
  onClose,
  navLinks,
}: MobileNavigationProps) {
  if (!isOpen) return null;

  const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${encodeURIComponent(
    'Bonjour NYDA BEAUTY HAIR, j’aimerais avoir des informations sur votre catalogue.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs sm:max-w-sm bg-[#1E1D1B] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-right">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#393431]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded overflow-hidden bg-[#1E1D1B] border border-[#393431]">
                <Image
                  src="/images/brand/nyda-logo-official.jpg"
                  alt="NYDA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-sm tracking-[0.18em] font-medium uppercase">
                  NYDA
                </p>
                <p className="text-[8px] tracking-[0.25em] text-[#8A7168] uppercase font-sans">
                  BEAUTY HAIR
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#E9DFD9] hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-8 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between text-base font-medium tracking-[0.08em] uppercase text-[#E9DFD9] hover:text-[#FCDFE1] transition-colors py-2"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#FCDFE1]" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Actions & WhatsApp */}
        <div className="pt-6 border-t border-[#393431] space-y-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-3 px-4 rounded text-xs uppercase tracking-wider font-medium hover:bg-[#20ba5a] transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Discuter sur WhatsApp</span>
          </a>

          <div className="flex items-center justify-center gap-6 pt-2 text-[#B99C91]">
            <a
              href={BRAND_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram NYDA"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={BRAND_CONFIG.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook NYDA"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>

          <p className="text-[11px] text-center text-[#8A7168] tracking-wider uppercase pt-2">
            L&apos;Art de la Beauté · Abidjan, CI
          </p>
        </div>
      </div>
    </div>
  );
}
