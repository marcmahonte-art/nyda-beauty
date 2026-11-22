import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#1E1D1B] text-white py-2 px-4 text-center text-[11px] sm:text-xs font-sans tracking-[0.08em] uppercase flex items-center justify-center gap-2 border-b border-[#393431]/40">
      <span className="w-1.5 h-1.5 rounded-full bg-[#FCDFE1] animate-pulse"></span>
      <span>
        Livraison offerte à Abidjan dès 35 000 FCFA d&apos;achats · Commande & conseil express sur WhatsApp
      </span>
    </div>
  );
}
