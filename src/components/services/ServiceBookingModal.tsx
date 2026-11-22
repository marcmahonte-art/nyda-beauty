'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { SalonServiceItem } from '@/lib/services';
import { formatPriceFCFA } from '@/lib/utils';
import { BRAND_CONFIG } from '@/lib/constants';
import Button from '@/components/ui/Button';

interface ServiceBookingModalProps {
  service: SalonServiceItem | null;
  categoryTitle?: string;
  categoryInclusions?: string;
  onClose: () => void;
}

export default function ServiceBookingModal({
  service,
  categoryTitle,
  categoryInclusions,
  onClose,
}: ServiceBookingModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Veuillez renseigner votre nom et votre numéro WhatsApp.');
      return;
    }

    const message = `*RÉSERVATION SALON DE COIFFURE — NYDA BEAUTY HAIR* 💇‍♀️
-----------------------------------------
✨ *Prestation :* ${service.name} (${categoryTitle || 'Coiffure'})
💰 *Tarif :* ${formatPriceFCFA(service.price)}
${categoryInclusions ? `📌 *Inclus :* ${categoryInclusions}\n` : ''}👤 *Nom de la cliente :* ${customerName}
📞 *Téléphone / WhatsApp :* ${customerPhone}
📅 *Date souhaitée :* ${preferredDate || 'Dès que possible'}
⏰ *Heure souhaitée :* ${preferredTime}
${notes ? `📝 *Précisions :* ${notes}\n` : ''}-----------------------------------------
_Bonjour l'équipe NYDA BEAUTY HAIR, je souhaite réserver cette séance de coiffure. Merci de me confirmer votre disponibilité pour ce créneau !_`;

    const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${encodeURIComponent(message)}`;
    setIsSubmitted(true);
    window.open(waUrl, '_blank');
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-[#E9DFD9] overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-label={`Réserver ${service.name}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E9DFD9] bg-[#F8F4F0]/80">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#8A7168] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B99C91]" />
              <span>Salon NYDA · Réservation</span>
            </span>
            <h2 className="font-display text-xl sm:text-2xl text-[#1E1D1B] font-normal mt-0.5">
              {service.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8A7168] hover:text-[#1E1D1B] rounded-full hover:bg-black/5 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl text-[#1E1D1B]">
              Demande transmise sur WhatsApp !
            </h3>
            <p className="text-sm text-[#393431] leading-relaxed max-w-sm mx-auto">
              Votre demande de rendez-vous pour <strong>{service.name}</strong> a été préparée. Notre responsable salon vous répondra très rapidement pour valider l&apos;horaire exact.
            </p>
            <div className="pt-2">
              <Button variant="primary" size="sm" onClick={onClose}>
                Fermer
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Service Recap Card */}
            <div className="bg-[#F8F4F0]/70 p-4 rounded border border-[#E9DFD9] space-y-1.5">
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1E1D1B]">
                  {categoryTitle || 'Coiffure'}
                </span>
                <span className="text-base font-bold text-[#1E1D1B]">
                  {formatPriceFCFA(service.price)}
                </span>
              </div>
              {categoryInclusions && (
                <p className="text-xs text-[#8A7168] leading-relaxed">
                  ✓ {categoryInclusions}
                </p>
              )}
              {service.duration && (
                <p className="text-[11px] text-[#8A7168] flex items-center gap-1 pt-1">
                  <Clock className="w-3 h-3" />
                  <span>Durée estimée : {service.duration}</span>
                </p>
              )}
            </div>

            {/* Inputs */}
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E1D1B] font-medium mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#8A7168]" />
                  <span>Votre Nom & Prénom *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Danielle N’Goran"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded border border-[#E9DFD9] text-sm text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E1D1B] font-medium mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#8A7168]" />
                  <span>Votre Numéro WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex : +225 07 00 00 00 00"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded border border-[#E9DFD9] text-sm text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B] font-medium mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8A7168]" />
                    <span>Date souhaitée</span>
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded border border-[#E9DFD9] text-xs sm:text-sm text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B] font-medium mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8A7168]" />
                    <span>Créneau horaire</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded border border-[#E9DFD9] text-xs sm:text-sm text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white"
                  >
                    <option value="08:30">08h30</option>
                    <option value="10:00">10h00</option>
                    <option value="12:00">12h00</option>
                    <option value="14:00">14h00</option>
                    <option value="16:00">16h00</option>
                    <option value="17:30">17h30</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8A7168] font-medium mb-1.5">
                  Précisions éventuelles (couleur des mèches, longueur...)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex : Mèches Outre couleur 1B, cheveux naturels mi-longs..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded border border-[#E9DFD9] text-xs text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white resize-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-[#E9DFD9] space-y-3">
              <Button
                type="submit"
                variant="whatsapp"
                fullWidth
                className="gap-2 font-semibold"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Réserver ce créneau sur WhatsApp</span>
              </Button>

              <p className="text-[11px] text-center text-[#8A7168]">
                Confirmation instantanée sans paiement préalable en ligne
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
