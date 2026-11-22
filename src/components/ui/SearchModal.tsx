'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, X, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { INITIAL_PRODUCTS } from '@/lib/products';
import { formatPriceFCFA } from '@/lib/utils';
import { Product } from '@/types';

export default function SearchModal() {
  const { isSearchOpen, closeSearch, openQuickView } = useCart();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return INITIAL_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category_name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-[#E9DFD9] overflow-hidden transition-all duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Recherche de produits"
      >
        {/* Search header */}
        <div className="flex items-center px-6 py-5 border-b border-[#E9DFD9]">
          <Search className="w-5 h-5 text-[#8A7168] mr-3 shrink-0" />
          <input
            type="text"
            className="w-full text-base sm:text-lg bg-transparent text-[#1E1D1B] placeholder-[#8A7168]/60 focus:outline-none font-sans"
            placeholder="Rechercher un soin, sérum, perruque, mèche..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button
            onClick={closeSearch}
            className="p-1.5 text-[#8A7168] hover:text-[#1E1D1B] hover:bg-[#F8F4F0] rounded-full transition-colors ml-2"
            aria-label="Fermer la recherche"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {query.trim() === '' ? (
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#8A7168] font-medium mb-4">
                Recherches populaires
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Sérum éclat',
                  'Traitement réparateur',
                  'Perruque HD Lace',
                  'Huile fortifiante',
                  'Mèches brutes',
                  'Bonnet en soie',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 text-xs bg-[#F8F4F0] hover:bg-[#FCDFE1] text-[#1E1D1B] rounded-full transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-base text-[#1E1D1B] font-display">
                Aucun résultat pour « {query} »
              </p>
              <p className="text-sm text-[#8A7168] mt-2">
                Essayez avec un autre mot-clé ou contactez notre conseillère sur WhatsApp.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.15em] text-[#8A7168] font-medium mb-3">
                {filtered.length} résultat{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
              </p>
              {filtered.map((product: Product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    closeSearch();
                    openQuickView(product);
                  }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#F8F4F0] transition-colors cursor-pointer group"
                >
                  <div className="relative w-14 h-16 bg-[#F8F4F0] rounded overflow-hidden shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#8A7168]">
                      {product.category_name}
                    </span>
                    <h4 className="text-sm font-medium text-[#1E1D1B] truncate group-hover:text-[#8A7168] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#1E1D1B] mt-0.5">
                      {formatPriceFCFA(product.sale_price ?? product.price)}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8A7168] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
