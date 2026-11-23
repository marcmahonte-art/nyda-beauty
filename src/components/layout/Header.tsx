'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { useCart } from '@/lib/cart-context';
import { BRAND_CONFIG } from '@/lib/constants';
import MobileNavigation from './MobileNavigation';
import AnnouncementBar from './AnnouncementBar';

const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Boutique', href: '/boutique' },
  { label: 'Nos services', href: '/services' },
  { label: 'Le salon', href: '/salon' },
];

export default function Header() {
  const { totalItems, openCart, openSearch } = useCart();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : !href.includes('#') && pathname.startsWith(href);

  // Sur l'accueil, l'en-tête se fond dans la photographie du hero tant que la
  // page n'est pas défilée : une seule surface ivoire, comme la référence.
  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled;

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
              : 'border-b border-transparent bg-[#F8F4F0]'
        }`}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:grid lg:h-[84px] lg:grid-cols-[1fr_auto_1fr] lg:px-12 xl:px-16">
          {/* Logo officiel — fichier source, proportions préservées */}
          <Link
            href="/"
            aria-label="NYDA BEAUTY HAIR — Accueil"
            className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#1E1D1B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F4F0] focus-visible:outline-none"
          >
            <Image
              src="/images/brand/nyda-logo-mark.png"
              alt="NYDA BEAUTY HAIR"
              width={503}
              height={420}
              priority
              className="h-[52px] w-auto sm:h-14 lg:h-[72px]"
            />
          </Link>

          {/* Navigation desktop */}
          <nav aria-label="Navigation principale" className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative py-2 font-sans text-[12px] tracking-[0.09em] uppercase transition-colors duration-200 xl:text-[13px] ${
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

          {/* Actions */}
          <div className="flex items-center justify-end gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={openSearch}
              className="rounded-full p-2 text-[#1E1D1B] transition-colors duration-200 hover:bg-black/5 hover:text-[#8A7168] focus-visible:ring-2 focus-visible:ring-[#1E1D1B] focus-visible:outline-none"
              aria-label="Rechercher un produit"
            >
              <Search aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
            </button>

            <span aria-hidden="true" className="hidden h-5 w-px bg-[#E9DFD9] lg:block" />

            <button
              type="button"
              onClick={openCart}
              className="relative rounded-full p-2 text-[#1E1D1B] transition-colors duration-200 hover:bg-black/5 hover:text-[#8A7168] focus-visible:ring-2 focus-visible:ring-[#1E1D1B] focus-visible:outline-none"
              aria-label={`Panier — ${totalItems} article${totalItems > 1 ? 's' : ''}`}
            >
              <ShoppingBag aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
              <span
                aria-hidden="true"
                className="absolute top-0.5 right-0.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#1E1D1B] px-1 font-sans text-[10px] leading-none font-semibold text-[#FCDFE1]"
              >
                {totalItems}
              </span>
            </button>

            <span aria-hidden="true" className="hidden h-5 w-px bg-[#E9DFD9] sm:block" />

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full p-2 text-[#1E1D1B] transition-colors duration-200 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-[#1E1D1B] focus-visible:outline-none sm:flex"
              aria-label="Contacter NYDA BEAUTY HAIR sur WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="-mr-2 ml-1 rounded-full p-2 text-[#1E1D1B] transition-colors duration-200 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-[#1E1D1B] focus-visible:outline-none lg:hidden"
              aria-label="Ouvrir le menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu aria-hidden="true" className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
