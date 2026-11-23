'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu, MessageCircle } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { BRAND_CONFIG } from '@/lib/constants';
import MobileNavigation from './MobileNavigation';
import AnnouncementBar from './AnnouncementBar';

export default function Header() {
  const { totalItems, openCart, openSearch } = useCart();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isTransparent = pathname === '/' && !isScrolled;

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
    { label: 'BOUTIQUE', href: '/boutique' },
    { label: 'NOS SERVICES', href: '/services' },
    { label: 'LE SALON', href: '/salon' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

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
        <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:grid lg:h-[84px] lg:grid-cols-[auto_1fr_auto] lg:px-12 xl:px-16">
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

          {/* Desktop Navigation Links (Center) */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center justify-center gap-7 xl:gap-10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative py-1 font-sans text-[12px] xl:text-[13px] uppercase tracking-[0.08em] transition-colors ${
                  isActive(link.href)
                    ? 'font-semibold text-[#1E1D1B]'
                    : 'font-medium text-[#393431] hover:text-[#8A7168]'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-[#FCDFE1]"
                  />
                )}
              </Link>
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

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              className="p-2 text-[#1E1D1B] hover:text-[#8A7168] hover:bg-black/5 rounded-full transition-colors lg:hidden"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
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
