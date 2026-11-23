'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Check, Plus, Minus, Star } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { useCart } from '@/lib/cart-context';
import {
  formatPriceFCFA,
  formatProductPrice,
  getProductInquiryUrl,
  hasPrice,
} from '@/lib/utils';
import { BRAND_CONFIG } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function ProductQuickView() {
  const { quickViewProduct, closeQuickView, addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isPriced = hasPrice(product);
  const hasDiscount = isPriced && product.sale_price && product.sale_price < product.price;
  const inquiryUrl = getProductInquiryUrl(product);

  const handleAddToCart = () => {
    if (!isPriced) return;
    addItem(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      closeQuickView();
    }, 1200);
  };

  const directWaMsg = encodeURIComponent(
    isPriced
      ? `Bonjour NYDA BEAUTY HAIR, je souhaite commander l'article "${product.name}" au prix de ${formatPriceFCFA(
          product.sale_price ?? product.price
        )}.`
      : `Bonjour NYDA BEAUTY HAIR, je souhaite connaître le prix de l'article "${product.name}". Merci.`
  );
  const waUrl = isPriced
    ? `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${directWaMsg}`
    : inquiryUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl border border-[#E9DFD9] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 p-2 text-[#8A7168] hover:text-[#1E1D1B] bg-white/80 hover:bg-white rounded-full backdrop-blur-sm shadow-sm transition-colors"
          aria-label="Fermer la modale"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Images */}
        <div className="w-full md:w-1/2 bg-[#F8F4F0] p-6 flex flex-col justify-between shrink-0">
          <div className="relative aspect-[4/5] w-full rounded overflow-hidden shadow-inner">
            <Image
              src={product.images[selectedImageIdx] || product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
            {hasDiscount && (
              <div className="absolute top-3 left-3">
                <Badge variant="blush">Offre spéciale</Badge>
              </div>
            )}
          </div>

          {/* Thumbnails if multiple */}
          {product.images.length > 1 && (
            <div className="flex gap-2.5 mt-4 justify-center">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImageIdx(i)}
                  className={`relative w-14 h-14 rounded overflow-hidden border-2 transition-all ${
                    selectedImageIdx === i
                      ? 'border-[#1E1D1B]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Aperçu" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information & Actions */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-[0.15em] text-[#8A7168] font-medium">
                {product.category_name}
              </span>
              {product.volume_or_size && (
                <span className="text-xs text-[#8A7168]">
                  • {product.volume_or_size}
                </span>
              )}
            </div>

            <h2 className="font-display text-2xl sm:text-3xl text-[#1E1D1B] font-normal leading-tight">
              {product.name}
            </h2>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1.5 mt-2">
                <div className="flex text-[#1E1D1B]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-current text-[#1E1D1B]"
                    />
                  ))}
                </div>
                <span className="text-xs text-[#8A7168] font-medium">
                  {product.rating.toFixed(1)} / 5.0
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 my-4">
              <span className="font-sans text-2xl font-bold text-[#1E1D1B]">
                {formatProductPrice(product)}
              </span>
              {hasDiscount && (
                <span className="text-sm text-[#8A7168] line-through">
                  {formatPriceFCFA(product.price)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[#393431] leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Key Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mb-6 space-y-2 bg-[#F8F4F0]/60 p-4 rounded border border-[#E9DFD9]/60">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#1E1D1B]">
                  Bénéfices clés :
                </p>
                <ul className="text-xs text-[#393431] space-y-1.5">
                  {product.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#B99C91] shrink-0 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#E9DFD9] space-y-3">
            {isPriced ? (
              <div className="flex items-center gap-4">
                {/* Quantity selector */}
                <div className="flex items-center border border-[#E9DFD9] rounded h-[50px] px-2 bg-[#F8F4F0]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1.5 text-[#1E1D1B] hover:text-[#8A7168] transition-colors"
                    aria-label="Diminuer la quantité"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-medium text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1.5 text-[#1E1D1B] hover:text-[#8A7168] transition-colors"
                    aria-label="Augmenter la quantité"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart button */}
                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  {isAdded ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-[#FCDFE1]" />
                      Ajouté au panier
                    </span>
                  ) : (
                    <span>Ajouter au panier</span>
                  )}
                </Button>
              </div>
            ) : (
              <p className="text-xs text-[#8A7168] bg-[#F8F4F0]/70 border border-[#E9DFD9]/70 rounded p-3">
                Le prix de cet article sera communiqué prochainement. Contactez-nous pour le connaître et passer commande.
              </p>
            )}

            {/* Direct WhatsApp order / price inquiry CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded text-xs uppercase tracking-wider font-medium transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>
                {isPriced
                  ? 'Commander directement via WhatsApp'
                  : 'Demander le prix via WhatsApp'}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
