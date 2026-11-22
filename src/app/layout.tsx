import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import WhatsAppCheckoutModal from '@/components/cart/WhatsAppCheckoutModal';
import ProductQuickView from '@/components/products/ProductQuickView';
import SearchModal from '@/components/ui/SearchModal';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nydabeautyhair.com'),
  title: 'NYDA BEAUTY HAIR — L’Art de la Beauté | Cosmétiques & Soins de Luxe',
  description:
    'Maison de beauté et soins capillaires haut de gamme en Côte d’Ivoire. Cosmétiques unifiants, soins réparateurs, perruques lace frontales indétectables et mèches vierges.',
  keywords: [
    'NYDA BEAUTY HAIR',
    'beauté Côte d’Ivoire',
    'soins capillaires Abidjan',
    'perruque lace frontal Abidjan',
    'cosmétiques peaux noires',
    'mèches vierges raw hair',
    'soin cheveux crépus défrisés',
  ],
  authors: [{ name: 'NYDA BEAUTY HAIR' }],
  openGraph: {
    title: 'NYDA BEAUTY HAIR — L’Art de la Beauté',
    description:
      'Révélez votre beauté, sublimez votre élégance. Cosmétiques, soins capillaires et perruques de luxe.',
    url: 'https://nydabeautyhair.com',
    siteName: 'NYDA BEAUTY HAIR',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/editorial/hero-model.jpg',
        width: 1200,
        height: 630,
        alt: 'NYDA BEAUTY HAIR — L’Art de la Beauté',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYDA BEAUTY HAIR — L’Art de la Beauté',
    description:
      'Maison de beauté et soins capillaires d’exception en Côte d’Ivoire.',
    images: ['/images/editorial/hero-model.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-white text-[#1E1D1B] font-sans antialiased min-h-screen flex flex-col selection:bg-[#FCDFE1] selection:text-[#1E1D1B]">
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />

          {/* Interactive Modals and Drawers */}
          <CartDrawer />
          <WhatsAppCheckoutModal />
          <ProductQuickView />
          <SearchModal />
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
