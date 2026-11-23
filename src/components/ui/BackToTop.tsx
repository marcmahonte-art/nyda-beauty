'use client';

import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

/**
 * Bouton « retour en haut » — cercle rose blush, double chevron,
 * apparaît après 300px de défilement, positionné en bas à droite.
 * Correspond exactement au bouton visible dans la référence mobile.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Retour en haut de la page"
      className="fixed bottom-6 right-5 sm:bottom-22 sm:right-7 z-40 flex h-11 w-11 flex-col items-center justify-center rounded-full bg-[#FCDFE1] text-[#1E1D1B] shadow-md transition-all duration-300 hover:bg-[#f0c8cb] hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1D1B] focus-visible:ring-offset-2"
    >
      <ChevronUp aria-hidden="true" className="-mb-2 h-4 w-4 stroke-[2.5]" />
      <ChevronUp aria-hidden="true" className="h-4 w-4 stroke-[2.5]" />
    </button>
  );
}
