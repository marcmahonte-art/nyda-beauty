import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import BrandIntroduction from '@/components/home/BrandIntroduction';
import CategorySection from '@/components/home/CategorySection';
import BestSellers from '@/components/home/BestSellers';
import EditorialCampaign from '@/components/home/EditorialCampaign';
import NewArrivals from '@/components/home/NewArrivals';
import BenefitsSection from '@/components/home/BenefitsSection';
import WhatsAppCTA from '@/components/home/WhatsAppCTA';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductGrid from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/products';

export default async function HomePage() {
  const allProducts = await getProducts();

  const cosmetiques = allProducts.filter((p) => p.category_id === 'cosmetiques');
  const soinsCapillaires = allProducts.filter((p) => p.category_id === 'soins-capillaires');
  const perruques = allProducts.filter((p) => p.category_id === 'perruques-meches');

  // JSON-LD structured data for Store and Products
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'NYDA BEAUTY HAIR',
    description:
      'Maison de beauté de luxe, cosmétiques, soins capillaires et perruques haut de gamme à Abidjan, Côte d’Ivoire.',
    url: 'https://nydabeautyhair.com',
    telephone: '+2250788238249',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Djorobité base CIE',
      addressLocality: 'Abidjan',
      addressCountry: 'CI',
    },
    currenciesAccepted: 'XOF',
    paymentAccepted: 'Cash on delivery, Mobile Money',
    priceRange: '5000 FCFA - 90000 FCFA',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Catalogue Beauté NYDA',
      itemListElement: allProducts.map((p, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: p.name,
          description: p.description,
          image: p.images[0],
          offers: {
            '@type': 'Offer',
            price: p.sale_price ?? p.price,
            priceCurrency: 'XOF',
            availability: 'https://schema.org/InStock',
          },
        },
        position: index + 1,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section — The Beauty Statement */}
      <HeroSection />

      {/* 2. Brand Introduction — Our Philosophy */}
      <BrandIntroduction />

      {/* 3. Shop by Category — Three Large Editorial Cards */}
      <CategorySection />

      {/* 4. Best Sellers — Product Grid */}
      <BestSellers products={allProducts} />

      {/* 5. Editorial Campaign — Beauty in Every Detail */}
      <EditorialCampaign />

      {/* 6. Section Dédiée : Cosmétiques & Soins du Visage */}
      <section id="cosmetiques" className="w-full bg-white py-20 sm:py-24 border-b border-[#E9DFD9]/50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              alignment="left"
              eyebrow="RITUEL DU VISAGE"
              title="Cosmétiques & Teint Divin"
              subtitle="Des sérums illuminants et crèmes hydratantes formulés pour sublimer l'éclat des peaux d'Afrique."
            />
            <div className="hidden md:block">
              <span className="text-xs uppercase tracking-widest text-[#8A7168] font-medium">
                {cosmetiques.length} soins d&apos;exception
              </span>
            </div>
          </div>
          <ProductGrid products={cosmetiques} columns={4} />
        </Container>
      </section>

      {/* 7. Section Dédiée : Soins Capillaires & Croissance */}
      <section id="soins-capillaires" className="w-full bg-[#F8F4F0] py-20 sm:py-24 border-b border-[#E9DFD9]/50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              alignment="left"
              eyebrow="FORCE & VITALITÉ"
              title="Soins Capillaires & Traitements"
              subtitle="Des formules riches en huiles précieuses et kératine végétale pour fortifier et stimuler la pousse."
            />
            <div className="hidden md:block">
              <span className="text-xs uppercase tracking-widest text-[#8A7168] font-medium">
                {soinsCapillaires.length} formules actives
              </span>
            </div>
          </div>
          <ProductGrid products={soinsCapillaires} columns={4} />
        </Container>
      </section>

      {/* 8. Section Dédiée : Perruques & Mèches */}
      <section id="perruques-meches" className="w-full bg-white py-20 sm:py-24 border-b border-[#E9DFD9]/50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              alignment="left"
              eyebrow="HAUTE COIFFURE"
              title="Perruques HD Lace & Raw Hair"
              subtitle="Dentelles HD indétectables et cheveux 100% naturels vierges sélectionnés pour leur fluidité incomparable."
            />
            <div className="hidden md:block">
              <span className="text-xs uppercase tracking-widest text-[#8A7168] font-medium">
                {perruques.length} pièces de prestige
              </span>
            </div>
          </div>
          <ProductGrid products={perruques} columns={4} />
        </Container>
      </section>

      {/* 9. New Arrivals — Collection Highlight Carousel */}
      <NewArrivals products={allProducts} />

      {/* 10. Brand Trust and Benefits */}
      <BenefitsSection />

      {/* 11. WhatsApp Conversion Section */}
      <WhatsAppCTA />
    </>
  );
}
