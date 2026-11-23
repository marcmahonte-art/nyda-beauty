'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, Phone, User, CreditCard } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { useCart } from '@/lib/cart-context';
import { CheckoutFormData, PaymentMethod } from '@/types';
import {
  formatPriceFCFA,
  generateOrderRef,
  formatWhatsAppMessage,
  getCartPriceInquiryUrl,
  hasUnpricedItems,
} from '@/lib/utils';
import { BRAND_CONFIG } from '@/lib/constants';
import { getSupabase } from '@/lib/supabase';
import Button from '@/components/ui/Button';

export default function WhatsAppCheckoutModal() {
  const { isCheckoutOpen, closeCheckout, items, subtotal, deliveryFee, total, clearCart } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>({
    customerName: '',
    customerPhone: '',
    customerCity: 'Abidjan (Djorobité / Base CIE)',
    customerAddress: '',
    deliveryNotes: '',
    paymentMethod: 'cod',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedRef, setCompletedRef] = useState<string | null>(null);

  if (!isCheckoutOpen) return null;

  const pendingPrices = hasUnpricedItems(items);

  const cities = [
    'Abidjan (Djorobité / Base CIE)',
    'Abidjan (Cocody / Angré)',
    'Abidjan (Riviera / Palmeraie)',
    'Abidjan (Deux-Plateaux)',
    'Abidjan (Marcory / Zone 4)',
    'Abidjan (Plateau)',
    'Abidjan (Yopougon)',
    'Abidjan (Koumassi / Treichville)',
    'Autre commune d’Abidjan',
    'Intérieur du pays (Yamoussoukro, Bouaké, San Pedro...)',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.customerPhone || !formData.customerAddress) {
      alert('Veuillez renseigner vos coordonnées complètes pour la livraison.');
      return;
    }

    // S'il reste des articles sans prix (panier hérité d'une ancienne version),
    // on demande leur tarif au lieu d'envoyer une commande à 0 FCFA.
    if (pendingPrices) {
      window.open(getCartPriceInquiryUrl(items), '_blank');
      closeCheckout();
      return;
    }

    setIsSubmitting(true);
    const orderRef = generateOrderRef();

    const orderData = {
      order_ref: orderRef,
      customer_name: formData.customerName,
      customer_phone: formData.customerPhone,
      customer_city: formData.customerCity,
      customer_address: formData.customerAddress,
      delivery_notes: formData.deliveryNotes,
      payment_method: formData.paymentMethod,
      items: items.map((i) => ({
        product_id: i.product.id,
        product_name: i.product.name,
        price: i.product.sale_price ?? i.product.price,
        quantity: i.quantity,
        image: i.product.images[0],
      })),
      subtotal,
      delivery_fee: deliveryFee,
      total,
      status: 'pending_whatsapp_confirmation',
      created_at: new Date().toISOString(),
    };

    // 1. Try to persist to Supabase if configured
    try {
      const supabase = getSupabase();
      if (supabase) {
        await supabase.from('orders').insert([orderData]);
      }
    } catch {
      // Graceful fallback
    }

    // 2. Persist in localStorage backup
    try {
      const existing = JSON.parse(localStorage.getItem('nyda_orders_history') || '[]');
      existing.push(orderData);
      localStorage.setItem('nyda_orders_history', JSON.stringify(existing));
    } catch {
      // Ignore
    }

    // 3. Format WhatsApp message & URL
    const encodedMessage = formatWhatsAppMessage({
      orderRef,
      customer: formData,
      items,
      subtotal,
      deliveryFee,
      total,
    });

    const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${encodedMessage}`;

    // 4. Set state & clear cart
    setCompletedRef(orderRef);
    setIsSubmitting(false);
    clearCart();

    // 5. Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-xl bg-white rounded-lg shadow-2xl border border-[#E9DFD9] overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-label="Finaliser ma commande WhatsApp"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E9DFD9] bg-[#F8F4F0]/80">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#8A7168]">
              Finalisation de commande
            </span>
            <h2 className="font-display text-xl sm:text-2xl text-[#1E1D1B] font-normal">
              {completedRef ? 'Commande Enregistrée !' : 'Commander sur WhatsApp'}
            </h2>
          </div>
          <button
            onClick={closeCheckout}
            className="p-1.5 text-[#8A7168] hover:text-[#1E1D1B] rounded-full hover:bg-black/5 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {completedRef ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8A7168]">
                Référence Unique
              </p>
              <h3 className="font-mono text-2xl font-bold text-[#1E1D1B] mt-1">
                {completedRef}
              </h3>
            </div>
            <p className="text-sm text-[#393431] leading-relaxed max-w-md mx-auto">
              Votre commande a été préparée et votre discussion WhatsApp s&apos;est ouverte. Si la fenêtre ne s&apos;est pas lancée automatiquement, cliquez sur le bouton ci-dessous :
            </p>
            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded text-xs uppercase tracking-wider font-semibold shadow hover:bg-[#20ba5a] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Ouvrir WhatsApp</span>
            </a>
            <div className="pt-4">
              <Button variant="outline" size="sm" onClick={closeCheckout}>
                Retour à la boutique
              </Button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Order Brief Summary */}
            <div className="bg-[#F8F4F0]/60 p-4 rounded border border-[#E9DFD9] flex items-center justify-between">
              <div>
                <p className="text-xs text-[#8A7168]">
                  {items.length} article{items.length > 1 ? 's' : ''} au panier
                </p>
                <p className="text-base font-bold text-[#1E1D1B] mt-0.5">
                  Total :{' '}
                  {pendingPrices ? 'à confirmer par NYDA' : formatPriceFCFA(total)}
                </p>
              </div>
              <span className="text-[11px] bg-[#FCDFE1] text-[#1E1D1B] px-2.5 py-1 rounded font-medium">
                Paiement à la livraison
              </span>
            </div>
            {pendingPrices && (
              <p className="text-xs text-[#8A7168] bg-[#F8F4F0]/70 border border-[#E9DFD9]/70 rounded p-3">
                Certains articles sont en « Prix sur demande ». Le bouton ci-dessous ouvrira une demande de tarif sur WhatsApp.
              </p>
            )}

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
                  value={formData.customerName}
                  onChange={(e) =>
                    setFormData({ ...formData, customerName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded border border-[#E9DFD9] text-sm text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E1D1B] font-medium mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#8A7168]" />
                  <span>Numéro de Téléphone (WhatsApp) *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex : +225 07 00 00 00 00"
                  value={formData.customerPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, customerPhone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded border border-[#E9DFD9] text-sm text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B] font-medium mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8A7168]" />
                    <span>Commune / Ville *</span>
                  </label>
                  <select
                    value={formData.customerCity}
                    onChange={(e) =>
                      setFormData({ ...formData, customerCity: e.target.value })
                    }
                    className="w-full px-3 py-2.5 rounded border border-[#E9DFD9] text-xs sm:text-sm text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B] font-medium mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-[#8A7168]" />
                    <span>Mode de règlement *</span>
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        paymentMethod: e.target.value as PaymentMethod,
                      })
                    }
                    className="w-full px-3 py-2.5 rounded border border-[#E9DFD9] text-xs sm:text-sm text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white"
                  >
                    <option value="cod">Paiement à la livraison (Cash)</option>
                    <option value="wave">Wave Mobile Money</option>
                    <option value="orange_money">Orange Money</option>
                    <option value="mtn_money">MTN Mobile Money</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E1D1B] font-medium mb-1.5">
                  Adresse précise de livraison & Repère *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Cocody Angré 8ème Tranche, près de la pharmacie..."
                  value={formData.customerAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, customerAddress: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded border border-[#E9DFD9] text-sm text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8A7168] font-medium mb-1.5">
                  Instructions ou précisions particulières (optionnel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex : Livrer de préférence après 14h..."
                  value={formData.deliveryNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, deliveryNotes: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded border border-[#E9DFD9] text-xs text-[#1E1D1B] focus:outline-none focus:border-[#1E1D1B] bg-white resize-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-[#E9DFD9] space-y-3">
              <Button
                type="submit"
                variant="whatsapp"
                fullWidth
                isLoading={isSubmitting}
                className="gap-2 font-semibold"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>
                  {pendingPrices
                    ? 'Demander les prix sur WhatsApp'
                    : 'Envoyer ma commande sur WhatsApp'}
                </span>
              </Button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#8A7168]">
                <ShieldCheck className="w-4 h-4 text-green-700" />
                <span>Validation humaine directe par notre conseillère</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
