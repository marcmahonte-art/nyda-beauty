'use client';

import React from 'react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { BRAND_CONFIG } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    'Bonjour NYDA BEAUTY HAIR, j’aimerais avoir des conseils sur vos produits et vos disponibilités.'
  );
  const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${message}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter NYDA BEAUTY HAIR sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
    >
      <WhatsAppIcon className="w-5 h-5 text-white" />
      <span className="text-xs font-medium tracking-wider uppercase hidden sm:inline-block">
        Conseil WhatsApp
      </span>
    </a>
  );
}
