'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPriceFCFA } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    items,
    updateQuantity,
    removeItem,
    subtotal,
    deliveryFee,
    total,
    openCheckout,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slide-left border-l border-[#E9DFD9]">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#E9DFD9] flex items-center justify-between bg-[#F8F4F0]/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1E1D1B]" />
              <h2 className="font-display text-xl text-[#1E1D1B] font-normal">
                Votre Panier
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#8A7168] hover:text-[#1E1D1B] rounded-full hover:bg-black/5 transition-colors"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F8F4F0] flex items-center justify-center text-[#8A7168]">
                  <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
                </div>
                <h3 className="font-display text-lg text-[#1E1D1B]">
                  Votre panier est vide
                </h3>
                <p className="text-sm text-[#8A7168] max-w-xs mx-auto">
                  Découvrez nos soins d’exception, cosmétiques et perruques pour composer votre rituel de beauté.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={closeCart}
                  className="mt-2"
                >
                  Continuer mes achats
                </Button>
              </div>
            ) : (
              items.map((item) => {
                const unitPrice =
                  item.product.sale_price ?? item.product.price;
                return (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3.5 bg-[#F8F4F0]/50 rounded border border-[#E9DFD9]/60 items-center justify-between"
                  >
                    <div className="relative w-16 h-20 bg-white rounded overflow-hidden shrink-0 border border-[#E9DFD9]">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#8A7168]">
                        {item.product.category_name}
                      </span>
                      <h4 className="text-xs sm:text-sm font-medium text-[#1E1D1B] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#1E1D1B] mt-1">
                        {formatPriceFCFA(unitPrice)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-[#E9DFD9] rounded bg-white">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="p-1 text-[#8A7168] hover:text-[#1E1D1B]"
                            aria-label="Diminuer la quantité"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="p-1 text-[#8A7168] hover:text-[#1E1D1B]"
                            aria-label="Augmenter la quantité"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-[#8A7168] hover:text-red-600 p-1 transition-colors"
                          aria-label="Supprimer l'article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs sm:text-sm font-semibold text-[#1E1D1B]">
                        {formatPriceFCFA(unitPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Drawer Footer with Calculations */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E9DFD9] bg-[#F8F4F0]/60 space-y-4">
              <div className="space-y-1.5 text-xs text-[#393431]">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span className="font-medium text-[#1E1D1B]">
                    {formatPriceFCFA(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison estimée</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-green-700 font-medium">
                        Offerte
                      </span>
                    ) : (
                      formatPriceFCFA(deliveryFee)
                    )}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-[11px] text-[#8A7168]">
                    Plus que{' '}
                    <strong className="text-[#1E1D1B]">
                      {formatPriceFCFA(35000 - subtotal)}
                    </strong>{' '}
                    pour la livraison offerte à Abidjan.
                  </p>
                )}
                <div className="flex justify-between text-sm font-bold text-[#1E1D1B] pt-2 border-t border-[#E9DFD9]">
                  <span>Total</span>
                  <span>{formatPriceFCFA(total)}</span>
                </div>
              </div>

              <Button
                variant="primary"
                fullWidth
                onClick={openCheckout}
                className="gap-2"
              >
                <span>Commander via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <p className="text-[11px] text-center text-[#8A7168]">
                Commande sécurisée · Aucun paiement immédiat requis en ligne
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
