import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CartItem, CheckoutFormData } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price in FCFA according to French conventions
 * e.g., 12500 -> "12 500 FCFA"
 */
export function formatPriceFCFA(amount: number): string {
  if (typeof amount !== 'number' || isNaN(amount)) return '0 FCFA';
  const formatted = new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${formatted} FCFA`;
}

/**
 * Generate a unique, luxury order reference
 * Format: NYDA-2026-XXXX
 */
export function generateOrderRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `NYDA-2026-${code}`;
}

/**
 * Format WhatsApp message for order transmission
 */
export function formatWhatsAppMessage(params: {
  orderRef: string;
  customer: CheckoutFormData;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}): string {
  const { orderRef, customer, items, subtotal, deliveryFee, total } = params;

  const paymentLabels: Record<string, string> = {
    cod: 'Paiement à la livraison',
    wave: 'Wave',
    orange_money: 'Orange Money',
    mtn_money: 'MTN Mobile Money',
  };

  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}* (x${item.quantity}) — ${formatPriceFCFA(
          (item.product.sale_price ?? item.product.price) * item.quantity
        )}`
    )
    .join('\n');

  const text = `*NOUVELLE COMMANDE NYDA BEAUTY HAIR* ✨
-----------------------------------------
🔖 *Réf. Commande :* ${orderRef}
👤 *Client :* ${customer.customerName}
📞 *Téléphone :* ${customer.customerPhone}
📍 *Ville / Commune :* ${customer.customerCity}
🏠 *Adresse :* ${customer.customerAddress}
${customer.deliveryNotes ? `📝 *Précisions :* ${customer.deliveryNotes}\n` : ''}💳 *Mode de règlement :* ${paymentLabels[customer.paymentMethod] || customer.paymentMethod}

🛍️ *ARTICLES COMMANDÉS :*
${itemsList}

-----------------------------------------
• Sous-total : ${formatPriceFCFA(subtotal)}
• Livraison : ${deliveryFee === 0 ? 'Offerte' : formatPriceFCFA(deliveryFee)}
*TOTAL À RÉGLER : ${formatPriceFCFA(total)}*
-----------------------------------------

_Bonjour NYDA BEAUTY HAIR, je souhaite finaliser ma commande passée sur la boutique en ligne. Merci de me confirmer la prise en charge et le délai de livraison._`;

  return encodeURIComponent(text);
}
