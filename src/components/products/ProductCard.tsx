'use client';

import React from 'react';
import Image from 'next/image';
import { Eye, Plus, Check } from 'lucide-react';
import { Product } from '@/types';
import { formatPriceFCFA } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
  product: Product;
  priorityImage?: boolean;
}

export default function ProductCard({
  product,
  priorityImage = false,
}: ProductCardProps) {
  const { addItem, openQuickView } = useCart();
  const [isAdded, setIsAdded] = React.useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const hasDiscount = product.sale_price && product.sale_price < product.price;

  return (
    <div
      onClick={() => openQuickView(product)}
      className="group relative flex flex-col bg-white rounded-[4px] border border-[#E9DFD9]/60 hover:border-[#1E1D1B]/30 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Product Image Area (4:5 ratio) */}
      <div className="relative aspect-[4/5] w-full bg-[#F8F4F0] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priorityImage}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {hasDiscount && (
            <Badge variant="blush" size="sm">
              Offre
            </Badge>
          )}
          {product.is_new && (
            <Badge variant="obsidian" size="sm">
              Nouveau
            </Badge>
          )}
        </div>

        {/* Quick View Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openQuickView(product);
          }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#1E1D1B] flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#1E1D1B] hover:text-white"
          aria-label={`Aperçu rapide de ${product.name}`}
          title="Aperçu rapide"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Bottom Quick Add overlay button on hover */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-10 hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#1E1D1B] text-white hover:bg-[#393431] active:scale-[0.98] py-2.5 px-3 rounded-[3px] text-[11px] font-sans font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 shadow-md"
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#FCDFE1]" />
                <span>Ajouté au panier</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Ajouter au panier</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-[#8A7168] font-medium block mb-1">
            {product.category_name}
          </span>
          <h3 className="font-sans text-xs sm:text-sm font-medium text-[#1E1D1B] line-clamp-2 leading-snug group-hover:text-[#8A7168] transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="mt-3 pt-2.5 border-t border-[#E9DFD9]/50 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xs sm:text-sm font-semibold text-[#1E1D1B]">
              {formatPriceFCFA(product.sale_price ?? product.price)}
            </span>
            {hasDiscount && (
              <span className="text-[11px] text-[#8A7168] line-through">
                {formatPriceFCFA(product.price)}
              </span>
            )}
          </div>

          {/* Mobile direct add icon */}
          <button
            onClick={handleAddToCart}
            className="sm:hidden p-1.5 rounded-full bg-[#F8F4F0] text-[#1E1D1B] active:bg-[#1E1D1B] active:text-white transition-colors"
            aria-label="Ajouter au panier"
          >
            {isAdded ? (
              <Check className="w-3.5 h-3.5 text-green-600" />
            ) : (
              <Plus className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
