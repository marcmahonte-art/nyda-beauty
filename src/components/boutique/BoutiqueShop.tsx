'use client';

import React, { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X, ChevronDown, Package, ArrowRight } from 'lucide-react';
import { Product, ProductCategory } from '@/types';
import ProductGrid from '@/components/products/ProductGrid';
import Button from '@/components/ui/Button';
import { BRAND_CONFIG } from '@/lib/constants';
import { getEffectivePrice } from '@/lib/utils';

type FilterKey = 'tous' | 'nouveautes' | 'coups-de-coeur' | ProductCategory;

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'name' | 'newest';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'tous', label: 'Tous les produits' },
  { key: 'coups-de-coeur', label: 'Coups de cœur' },
  { key: 'nouveautes', label: 'Nouveautés' },
  { key: 'soins-capillaires', label: 'Soins capillaires' },
  { key: 'perruques-meches', label: 'Perruques & mèches' },
  { key: 'accessoires', label: 'Accessoires' },
];

const SORTS: { key: SortKey; label: string }[] = [
  { key: 'featured', label: 'Sélection NYDA' },
  { key: 'newest', label: 'Nouveautés' },
  { key: 'price-asc', label: 'Prix croissant' },
  { key: 'price-desc', label: 'Prix décroissant' },
  { key: 'name', label: 'Nom A → Z' },
];

interface BoutiqueShopProps {
  products: Product[];
  initialCategory?: FilterKey;
}

export default function BoutiqueShop({ products, initialCategory = 'tous' }: BoutiqueShopProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>(initialCategory);
  const [sort, setSort] = useState<SortKey>('featured');
  const [query, setQuery] = useState('');
  const [sortOpen, setSortOpen] = useState(false);

  const counts = useMemo(() => {
    const result: Record<string, number> = {
      tous: products.length,
      nouveautes: products.filter((p) => p.is_new).length,
      'coups-de-coeur': products.filter((p) => p.is_featured).length,
    };
    products.forEach((p) => {
      result[p.category_id] = (result[p.category_id] || 0) + 1;
    });
    return result;
  }, [products]);

  const visibleProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      const categoryMatch =
        activeFilter === 'tous' ||
        (activeFilter === 'nouveautes' && p.is_new) ||
        (activeFilter === 'coups-de-coeur' && p.is_featured) ||
        p.category_id === activeFilter;
      const searchMatch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category_name.toLowerCase().includes(q);
      return categoryMatch && searchMatch;
    });

    list = [...list];
    switch (sort) {
      case 'price-asc':
      case 'price-desc':
        // Les articles « Prix sur demande » restent toujours en fin de liste.
        list.sort((a, b) => {
          const priceA = getEffectivePrice(a);
          const priceB = getEffectivePrice(b);
          if (priceA === null && priceB === null) return a.name.localeCompare(b.name, 'fr');
          if (priceA === null) return 1;
          if (priceB === null) return -1;
          return sort === 'price-asc' ? priceA - priceB : priceB - priceA;
        });
        break;
      case 'name':
        list.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
        break;
      case 'newest':
        list.sort((a, b) => Number(b.is_new) - Number(a.is_new));
        break;
      default:
        list.sort((a, b) => Number(b.is_featured) - Number(a.is_featured));
    }
    return list;
  }, [products, activeFilter, query, sort]);

  const activeSortLabel = SORTS.find((s) => s.key === sort)?.label || 'Sélection NYDA';

  const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappPhone}?text=${encodeURIComponent(
    'Bonjour NYDA BEAUTY HAIR, je cherche un produit précis, pouvez-vous m’aider ?'
  )}`;

  return (
    <section className="w-full bg-white py-10 sm:py-14 border-b border-[#E9DFD9]/50" id="boutique">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#B99C91] mr-1 hidden sm:block" />
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-3.5 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-wide transition-all border ${
                    isActive
                      ? 'bg-[#1E1D1B] text-white border-[#1E1D1B] shadow-sm'
                      : 'bg-white text-[#8A7168] border-[#E9DFD9] hover:border-[#B99C91] hover:text-[#1E1D1B]'
                  }`}
                >
                  {filter.label}
                  <span className={`ml-1.5 text-[10px] ${isActive ? 'text-[#FCDFE1]' : 'text-[#B99C91]'}`}>
                    {counts[filter.key] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search + Sort */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B99C91]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un produit…"
                aria-label="Rechercher un produit"
                className="w-full pl-9 pr-9 py-2.5 rounded-[4px] border border-[#E9DFD9] bg-[#F8F4F0]/50 text-sm text-[#1E1D1B] placeholder:text-[#8A7168]/70 focus:outline-none focus:border-[#B99C91] focus:bg-white transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Effacer la recherche"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#8A7168] hover:text-[#1E1D1B]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="relative shrink-0">
              <button
                onClick={() => setSortOpen((v) => !v)}
                aria-label="Trier les produits"
                aria-expanded={sortOpen}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-[4px] border border-[#E9DFD9] bg-white text-xs text-[#393431] hover:border-[#B99C91] transition-colors whitespace-nowrap"
              >
                <span className="hidden sm:inline">{activeSortLabel}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 z-20 w-52 bg-white border border-[#E9DFD9] rounded-[4px] shadow-xl py-1.5">
                    {SORTS.map((option) => (
                      <button
                        key={option.key}
                        onClick={() => {
                          setSort(option.key);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#F8F4F0] ${
                          sort === option.key
                            ? 'text-[#1E1D1B] font-semibold bg-[#F8F4F0]'
                            : 'text-[#8A7168]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Results line */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E9DFD9]/60">
          <p className="text-xs text-[#8A7168]">
            <span className="font-semibold text-[#1E1D1B]">{visibleProducts.length}</span>{' '}
            {visibleProducts.length > 1 ? 'produits disponibles' : 'produit disponible'}
            {activeFilter !== 'tous' && (
              <> dans <span className="text-[#1E1D1B]">{FILTERS.find((f) => f.key === activeFilter)?.label}</span></>
            )}
          </p>
          {(query || activeFilter !== 'tous') && (
            <button
              onClick={() => {
                setQuery('');
                setActiveFilter('tous');
              }}
              className="text-xs text-[#B99C91] hover:text-[#1E1D1B] underline underline-offset-4 transition-colors"
            >
              Réinitialiser
            </button>
          )}
        </div>

        {/* Products */}
        {visibleProducts.length > 0 ? (
          <ProductGrid products={visibleProducts} columns={4} />
        ) : (
          <div className="text-center py-20 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#F8F4F0] flex items-center justify-center">
              <Package className="w-6 h-6 text-[#B99C91]" />
            </div>
            <h3 className="font-display text-2xl text-[#1E1D1B]">Aucun produit trouvé</h3>
            <p className="text-sm text-[#8A7168] max-w-md mx-auto">
              Essayez une autre recherche ou contactez-nous directement sur WhatsApp pour trouver le produit idéal.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setQuery('');
                  setActiveFilter('tous');
                }}
              >
                Voir tous les produits
              </Button>
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="md" className="gap-2">
                  <span>Nous contacter</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
