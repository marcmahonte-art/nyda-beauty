'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/image';
import Image from 'next/image';
import { Search, ShoppingBag, Menu, MessageCircle } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { BRAND_CONFIG } from '@/lib/constants';
import MobileNavigation from './MobileNavigation';
import AnnouncementBar from './AnnouncementBar';

export default function Header() {
  const { totalItems, openCart, openSearch } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ACCUEIL', href: '/' },
    { label: 'SERVICES & TARIFS', href: '/services' },
    { label: 'BOUTIQUE', href: '/#boutique' },
    { label: 'COSMÉTIQUES', href: '/#cosmetiques' },
    { label: 'SOINS CAPILLAIRES', href: '/#soins-capillaires' },
    { label: 'PERRUQUES & MÈCHES', href: '/#perruques-meches' },
  ];

  const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${encodeURIComponent(
    'Bonjour NYDA BEAUTY HAIR, je souhaite des renseignements sur vos collections.'
  )}`;

  return (
    <>
      <AnnouncementBar />
      <header
        className={`sticky top-0 z-40 w-full transition-[background-color,box-shadow,border-color] duration-300 ${
          isTransparent
            ? 'border-b border-transparent bg-transparent'
            : isScrolled
              ? 'border-b border-[#E9DFD9]/80 bg-white/95 shadow-[0_1px_0_rgba(30,29,27,0.04)] backdrop-blur-md'
              : 'border-b border-transparent bg-[#ffeee1]'
        }`}
      >
        <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:grid lg:h-[84px] lg:grid-cols-[1fr_auto_1fr] lg:px-12 xl:px-16">
          {/* Logo officiel — fichier source, proportions préservées */}
          <Link
            href="/"
            aria-label="NYDA BEAUTY HAIR — Accueil"
            className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#1E1D1B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#ffeee1] focus-visible:outline-none"
          >
            <Image
              src="/images/brand/nyda-logo-mark.png"
              alt="NYDA BEAUTY HAIR"
              width={503}
              height={420}
              priority
              className="h-[72px] w-auto lg:h-[72px]"
            />
          </Link>

          {/* Brand Official Logo (Left on desktop, Centered on mobile) */}
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center gap-3 group transition-transform hover:opacity-95"
              aria-label="NYDA BEAUTY HAIR Accueil"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-[4px] overflow-hidden bg-[#1E1D1B] shadow-sm border border-[#393431]/30 shrink-0">
                <Image
                  src="/images/brand/nyda-logo-official.jpg"
                  alt="NYDA BEAUTY HAIR Logo Officiel"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-display tracking-[0.18em] text-[15px] sm:text-[17px] font-semibold text-[#1E1D1B] leading-none uppercase">
                  NYDA
                </span>
                <span className="font-sans text-[9px] tracking-[0.25em] text-[#8A7168] uppercase font-medium mt-1">
                  BEAUTY HAIR
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] xl:text-[13px] font-medium tracking-[0.06em] uppercase text-[#1E1D1B] hover:text-[#B99C91] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1E1D1B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Icons (Right) */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Search */}
            <button
              onClick={openSearch}
              className="p-2 text-[#1E1D1B] hover:text-[#8A7168] hover:bg-black/5 rounded-full transition-colors"
              aria-label="Rechercher des produits"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* WhatsApp Direct Contact */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 text-[#1E1D1B] hover:text-[#25D366] hover:bg-black/5 rounded-full transition-colors"
              aria-label="Nous contacter sur WhatsApp"
              title="Conseil WhatsApp direct"
            >
              <MessageCircle className="w-5 h-5 stroke-[1.5]" />
            </a>

            {/* Shopping Bag with Badge */}
            <button
              onClick={openCart}
              className="relative p-2 text-[#1E1D1B] hover:text-[#8A7168] hover:bg-black/5 rounded-full transition-colors"
              aria-label={`Panier (${totalItems} article${totalItems > 1 ? 's' : ''})`}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-[#1E1D1B] text-[#FCDFE1] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
