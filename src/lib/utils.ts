import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CartItem, CheckoutFormData } from '@/types';
import { BRAND_CONFIG } from '@/lib/constants';

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
 * Un prix à 0 signifie « prix non encore communiqué par la boutique ».
 * Aucun prix fictif n'est jamais affiché pour ces références.
 */
type PriceableProduct = {
  price: number;
  sale_price?: number | null;
};

export function getEffectivePrice(product: PriceableProduct): number | null {
  const value = product.sale_price ?? product.price;
  return typeof value === 'number' && value > 0 ? value : null;
}

export function hasPrice(product: PriceableProduct): boolean {
  return getEffectivePrice(product) !== null;
}

export function formatProductPrice(product: PriceableProduct): string {
  const price = getEffectivePrice(product);
  return price === null ? 'Prix sur demande' : formatPriceFCFA(price);
}

export function hasUnpricedItems(items: { product: PriceableProduct }[]): boolean {
  return items.some((item) => !hasPrice(item.product));
}

/**
 * Lien WhatsApp pour demander le prix d'un article non encore tarifé.
 */
export function getProductInquiryUrl(product: { name: string }): string {
  const message = encodeURIComponent(
    `Bonjour NYDA BEAUTY HAIR, je souhaite connaître le prix de l'article "${product.name}". Merci.`
  );
  return `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${message}`;
}

/**
 * Lien WhatsApp pour demander le prix de plusieurs articles non tarifés.
 */
export function getCartPriceInquiryUrl(items: CartItem[]): string {
  const lines = items
    .filter((item) => !hasPrice(item.product))
    .map((item) => `- ${item.product.name} (x${item.quantity})`)
    .join('\n');
  const message = encodeURIComponent(
    `Bonjour NYDA BEAUTY HAIR, je souhaite connaître le prix des articles suivants :\n${lines}\nMerci.`
  );
  return `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${message}`;
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

  const pendingPrices = hasUnpricedItems(items);

  const itemsList = items
    .map((item, idx) => {
      const unitPrice = getEffectivePrice(item.product);
      const linePrice =
        unitPrice === null
          ? 'Prix sur demande'
          : formatPriceFCFA(unitPrice * item.quantity);
      return `${idx + 1}. *${item.product.name}* (x${item.quantity}) — ${linePrice}`;
    })
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
• Sous-total : ${pendingPrices ? 'À confirmer par NYDA' : formatPriceFCFA(subtotal)}
• Livraison : ${deliveryFee === 0 ? 'Offerte' : formatPriceFCFA(deliveryFee)}
*TOTAL À RÉGLER : ${pendingPrices ? 'À confirmer par NYDA' : formatPriceFCFA(total)}*
${pendingPrices ? '⚠️ Certains articles sont affichés « Prix sur demande » : merci de me confirmer leur tarif avant validation.\n' : ''}-----------------------------------------

_Bonjour NYDA BEAUTY HAIR, je souhaite finaliser ma commande passée sur la boutique en ligne. Merci de me confirmer la prise en charge et le délai de livraison._`;

  return encodeURIComponent(text);
}
