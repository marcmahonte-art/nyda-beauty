import { Product, ProductCategory } from '@/types';
import { getSupabase } from './supabase';

/**
 * Catalogue officiel NYDA BEAUTY HAIR
 * Source : « Catalogue des Produits Capillaires – Fiches Techniques » (14 références)
 * Prix officiels : « Catalogue des Produits pRIX.pdf » (montants en FCFA)
 * Les images sont les visuels réels de la boutique, normalisés en 600×600 WebP
 * sur fond blanc à partir des fichiers HD de « produits/hd » (et de « produits »
 * pour Blue Magic, Ghost Bond XL et le trio de mousses).
 */
export const INITIAL_PRODUCTS: Product[] = [
  // 01 — COLORATION
  {
    id: 'prod-01',
    name: 'L’Ocoitene Colorant – Natural Black Hair Dye',
    slug: 'locoitene-colorant-natural-black',
    description: 'Coloration capillaire noire professionnelle en système 2 flacons, enrichie en huile nourrissante au germe de blé. Couvre les cheveux blancs et gris en une teinte noire naturelle, uniforme et brillante.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 5000,
    sale_price: null,
    images: ['/images/catalogue/produit-01.webp'],
    stock_quantity: 20,
    is_featured: true,
    is_new: false,
    is_active: true,
    benefits: [
      'Couvre intégralement les cheveux blancs et gris',
      'Formule au germe de blé pour les cheveux naturels et fins',
      'Teinte noire naturelle uniforme et brillante',
      'Format économique 500 ml × 2',
    ],
    usage: 'Mélanger les deux agents à parts égales (1:1) avec des gants, appliquer sur cheveux, laisser poser selon la notice puis rincer soigneusement.',
    volume_or_size: '500 ml × 2 (16.6 fl oz)',
    rating: 4.8,
  },

  // 02 — MOUSSE COIFFANTE
  {
    id: 'prod-02',
    name: 'AiFaSi Hair Styling Mousse Foam',
    slug: 'aifasi-hair-styling-mousse-foam',
    description: 'Mousse coiffante aérienne sans rinçage en flacon pompe. Apporte volume, souplesse et tenue légère sans effet cartonné ni résidus collants.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 3000,
    sale_price: null,
    images: [
      '/images/catalogue/produit-02.webp',
      '/images/catalogue/produit-02-2.webp',
    ],
    stock_quantity: 28,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      'Définition des boucles naturelles',
      'Mise en plis des perruques',
      'Contrôle des frisottis sans résidus',
      'Coiffage au sèche-cheveux',
    ],
    usage: 'Appliquer sur cheveux humides ou secs, répartir uniformément puis coiffer comme souhaité. Sans rinçage.',
    volume_or_size: '500 ml',
    rating: 4.7,
  },

  // 03 — SHAMPOING COLORANT
  {
    id: 'prod-03',
    name: 'Dexe Black Hair Shampoo',
    slug: 'dexe-black-hair-shampoo',
    description: 'Shampoing colorant noir 2-en-1 pour hommes et femmes. Nettoie le cuir chevelu et colore les cheveux blancs en noir naturel en 5 à 10 minutes, sans ammoniaque.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 5000,
    sale_price: null,
    images: ['/images/catalogue/produit-03.webp'],
    stock_quantity: 24,
    is_featured: true,
    is_new: false,
    is_active: true,
    benefits: [
      'Coloration noire en 5 à 10 minutes',
      'Formule douce sans ammoniaque',
      'Extraits végétaux pour nourrir la fibre',
      'Système pompe à double réservoir',
    ],
    usage: 'Porter des gants, presser la pompe (ratio 1:1), masser sur cheveux secs 5 à 10 min (15–20 min sur cheveux résistants), puis rincer à l’eau claire.',
    volume_or_size: '400 ml (14.1 fl oz)',
    rating: 4.8,
  },

  // 04 — MOUSSE UBERCARE
  {
    id: 'prod-04',
    name: 'Ubercare Foaming Mousse – Coconut & Shea Oils',
    slug: 'ubercare-foaming-mousse-coconut-shea',
    description: 'Lotion moussante pour mises en plis, boucles et tresses, aux huiles de noix de coco et beurre de karité. Crée des mises en plis souples et discipline les frisottis sans alourdir.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 5000,
    sale_price: null,
    images: ['/images/catalogue/produit-04.webp'],
    stock_quantity: 26,
    is_featured: true,
    is_new: false,
    is_active: true,
    benefits: [
      'Mises en plis souples (soft wraps)',
      'Définit les boucles et tresses',
      'Huile de coco et beurre de karité',
      'Séchage rapide, hydrate sans alourdir',
    ],
    usage: 'Appliquer la mousse sur cheveux humides, répartir des racines aux pointes puis procéder à la mise en plis ou au coiffage.',
    volume_or_size: '207 ml (7 fl oz)',
    rating: 4.9,
  },

  // 05 — MASQUE KÉRATINE
  {
    id: 'prod-05',
    name: 'Keratin Creamy Hair Mask – Pearly Wire Drawing',
    slug: 'keratin-creamy-hair-mask',
    description: 'Masque capillaire crémeux intensif à la kératine, format professionnel. Nourrit en profondeur, répare les cheveux abîmés et secs, prévient la casse et les pointes fourchues.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 5000,
    sale_price: null,
    images: ['/images/catalogue/produit-05.webp'],
    stock_quantity: 14,
    is_featured: true,
    is_new: false,
    is_active: true,
    benefits: [
      'Réparation intensive à la kératine',
      'Prévient la casse et les pointes fourchues',
      'Convient aux cheveux naturels, perruques, mèches et tissages',
      'Pot professionnel 1000 ml',
    ],
    usage: 'Appliquer après le shampoing sur les longueurs et pointes essorées, laisser agir 5 à 10 minutes puis rincer abondamment.',
    volume_or_size: '1000 ml (35.24 fl oz)',
    rating: 4.9,
  },

  // 06 — GEL SHINE 'N JAM
  {
    id: 'prod-06',
    name: 'Shine ’n Jam Conditioning Gel – Extra Hold',
    slug: 'shine-n-jam-conditioning-gel-extra-hold',
    description: 'Gel revitalisant à fixation extra-ferme, n°1 des tresseuses. Enrichi en extrait de miel fortifiant, sans alcool ni parabènes, pour tresses, vanilles, locks et bordures.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 5000,
    sale_price: null,
    images: ['/images/catalogue/produit-06.webp'],
    stock_quantity: 32,
    is_featured: true,
    is_new: false,
    is_active: true,
    benefits: [
      'Fixation ferme et non grasse, sans résidus blancs',
      'Idéal tresses, vanilles, locks et baby hairs',
      'Sans alcool, parabènes, cire ni silicones',
      'Convient aux cheveux naturels et traités',
    ],
    usage: 'Prélever une petite quantité, répartir sur les sections à tresser ou plaquer les bordures, puis laisser sécher.',
    volume_or_size: '113,5 g (4 oz) / 227 g (8 oz)',
    rating: 4.9,
  },

  // 07 — MAYONNAISE VITALE
  {
    id: 'prod-07',
    name: 'Vitale Olive Oil Hair Mayonnaise',
    slug: 'vitale-olive-oil-hair-mayonnaise',
    description: 'Soin revitalisant profond aux protéines et à l’huile d’olive. Répare les cheveux fragilisés par les traitements chimiques et redonne élasticité, force et brillance.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 8000,
    sale_price: null,
    images: ['/images/catalogue/produit-07.webp'],
    stock_quantity: 18,
    is_featured: false,
    is_new: false,
    is_active: true,
    benefits: [
      'Huile d’olive, protéines d’avoine et cholestérol',
      'Vitamines B5 et E, extraits botaniques',
      'Restaure élasticité, force et brillance',
      'Format Bonus Size 853 g',
    ],
    usage: 'Appliquer généreusement après le shampoing des racines aux pointes, couvrir d’un bonnet chauffant 10 minutes puis rincer à l’eau tiède.',
    volume_or_size: '853 g (30 oz)',
    rating: 4.8,
  },

  // 08 — GEL ECO STYLE
  {
    id: 'prod-08',
    name: 'Eco Style Professional Styling Gel – Olive Oil',
    slug: 'eco-style-styling-gel-olive-oil',
    description: 'Gel coiffant professionnel à l’huile d’olive 100 % pure, fixation maximale 10/10. Sans alcool, avec glycérine et protection UV intégrée.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 7000,
    sale_price: null,
    images: ['/images/catalogue/produit-08.webp'],
    stock_quantity: 30,
    is_featured: true,
    is_new: false,
    is_active: true,
    benefits: [
      'Fixation maximale 10/10',
      'Hydrate le cuir chevelu et dompte les frisottis',
      'Définit les boucles sans pellicules blanches',
      'Sans alcool, protection UV',
    ],
    usage: 'Appliquer sur cheveux humides, répartir uniformément et coiffer. Convient au Wash & Go, Twist Out et plaquage des bordures.',
    volume_or_size: '473 ml (16 fl oz)',
    rating: 4.9,
  },

  // 09 — COLLE EBIN
  {
    id: 'prod-09',
    name: 'EBIN New York – Wonder Lace Bond Adhesive',
    slug: 'ebin-wonder-lace-bond-adhesive',
    description: 'Colle adhésive haute performance pour perruques lace. Formule sans latex, waterproof et résistante à la transpiration, sèche totalement transparente et invisible.',
    category_id: 'perruques-meches',
    category_name: 'Perruques & mèches',
    price: 5000,
    sale_price: null,
    images: [
      '/images/catalogue/produit-09.webp',
      '/images/catalogue/produit-09-2.webp',
      '/images/catalogue/produit-09-3.webp',
      '/images/catalogue/produit-09-4.webp',
    ],
    stock_quantity: 22,
    is_featured: true,
    is_new: false,
    is_active: true,
    benefits: [
      'Sans latex, résistant à l’eau et à la transpiration',
      'Séchage rapide, fini transparent et invisible',
      'Variantes Original, Supreme, Active et Sensitive',
      'Tenue extra-forte pour lace wigs',
    ],
    usage: 'Nettoyer le contour du front, appliquer une fine couche, attendre qu’elle devienne transparente et collante, puis presser la dentelle jusqu’au séchage.',
    volume_or_size: 'Flacon / tube selon variante',
    rating: 4.8,
  },

  // 10 — BLUE MAGIC
  {
    id: 'prod-10',
    name: 'Gamme Blue Magic Conditioners – Lot de 4',
    slug: 'blue-magic-conditioners-lot-4',
    description: 'Lot de 4 baumes conditionneurs pour cheveux et cuir chevelu : Coconut Oil, Bergamot, Indian Hemp et Hair Dress. Scelle l’hydratation et protège contre la casse.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 5000,
    sale_price: null,
    images: ['/images/catalogue/produit-10.webp'],
    stock_quantity: 16,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      '4 variantes : Coconut Oil, Bergamot, Indian Hemp, Hair Dress',
      'Scelle l’hydratation et assouplit les cheveux',
      'Protège contre la casse',
      'Convient aux cheveux crépus, bouclés et défrisés',
    ],
    usage: 'Prélever une noisette, chauffer entre les mains et masser délicatement le cuir chevelu et les longueurs.',
    volume_or_size: '340 g (12 oz) par pot',
    rating: 4.7,
  },

  // 11 — GHOST BOND XL
  {
    id: 'prod-11',
    name: 'Ghost Bond XL – Professional Hair Labs',
    slug: 'ghost-bond-xl-professional-hair-labs',
    description: 'Adhésif capillaire invisible haute résistance pour systèmes Poly et Lace. Copolymère à base d’eau, sans latex, spécialement conçu pour les cuirs chevelus gras et les climats humides.',
    category_id: 'perruques-meches',
    category_name: 'Perruques & mèches',
    price: 4000,
    sale_price: null,
    images: ['/images/catalogue/produit-11.webp'],
    stock_quantity: 18,
    is_featured: true,
    is_new: false,
    is_active: true,
    benefits: [
      'Technologie Xtra Moisture Control',
      'Idéal cuirs chevelus gras et forte humidité',
      'Sèche totalement transparent et mat',
      'Homologué FDA, sans latex ni solvants agressifs',
    ],
    usage: 'Appliquer 4 fines couches sur le cuir chevelu propre en laissant chaque couche devenir transparente (~20 sec) avant de poser la perruque.',
    volume_or_size: '38 ml (1.3 fl oz)',
    rating: 4.9,
  },

  // 12 — TRIO MOUSSES
  {
    id: 'prod-12',
    name: 'Trio de Mousses Coiffantes – Ubercare & Olive Moisture',
    slug: 'trio-mousses-coiffantes-ubercare-olive-moisture',
    description: 'Lot de 3 lotions moussantes : Ubercare Coconut & Shea, Ubercare Morocco Argan Oil et Olive Moisture Style Control. Définition de boucles, mise en plis et entretien des perruques.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 5000,
    sale_price: null,
    images: ['/images/catalogue/produit-12.webp'],
    stock_quantity: 14,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      'Ubercare Coconut & Shea : boucles souples anti-frisottis',
      'Ubercare Morocco Argan : fixation extra et brillance',
      'Olive Moisture : séchage rapide et volume léger',
      'Idéal wraps, tresses, vanilles et perruques',
    ],
    usage: 'Appliquer sur cheveux humides, répartir puis procéder à la mise en plis, aux tresses ou au coiffage souhaité.',
    volume_or_size: '207 ml (7 fl oz) par flacon',
    rating: 4.8,
  },

  // 13 — LANELL
  {
    id: 'prod-13',
    name: 'Lanell Anti-Fungus Hair Bonding Glue – Super Bond',
    slug: 'lanell-anti-fungus-hair-bonding-glue',
    description: 'Colle capillaire résistante à l’eau pour tissages et bandes d’extensions, enrichie d’un agent antifongique pour une fixation longue durée et résistante à l’humidité.',
    category_id: 'perruques-meches',
    category_name: 'Perruques & mèches',
    price: 3000,
    sale_price: null,
    images: [
      '/images/catalogue/produit-13.webp',
      '/images/catalogue/produit-13-2.webp',
    ],
    stock_quantity: 20,
    is_featured: false,
    is_new: false,
    is_active: true,
    benefits: [
      'Formule Super Bond antifongique',
      'Résistante à l’eau et à l’humidité',
      'Embout applicateur de précision',
      'Fixation longue durée pour tissages',
    ],
    usage: 'Appliquer uniquement sur la trame de l’extension, jamais directement sur le cuir chevelu. Retirer avec un dissolvant adapté. Contient du latex naturel.',
    volume_or_size: '118 ml (4 fl oz)',
    rating: 4.7,
  },

  // 14 — GOT2B
  {
    id: 'prod-14',
    name: 'Schwarzkopf got2b Glued – Blasting Freeze Spray',
    slug: 'got2b-glued-blasting-freeze-spray',
    description: 'Spray fixant coiffant tenue extrême (indice 4). Fige instantanément la coiffure jusqu’au prochain shampoing en résistant à l’humidité et au vent.',
    category_id: 'soins-capillaires',
    category_name: 'Soins capillaires',
    price: 7000,
    sale_price: null,
    images: ['/images/catalogue/produit-14.webp'],
    stock_quantity: 24,
    is_featured: false,
    is_new: false,
    is_active: true,
    benefits: [
      'Tenue extrême Blasting Hold',
      'Résiste à l’humidité et au vent',
      'Parfait pour bordures de perruques (melting)',
      'Finition sans effet collant',
    ],
    usage: 'Vaporiser uniformément à 25–30 cm de la chevelure et laisser sécher à l’air libre ou au sèche-cheveux à air froid.',
    volume_or_size: '340 g (12 oz)',
    rating: 4.8,
  },

  // 15 — BROSSES À BORDURES (prix à communiquer par la boutique)
  {
    id: 'prod-15',
    name: 'Brosses à Bordures Double Face – Double-Sided Edge Brushes',
    slug: 'brosses-bordures-double-face',
    description: 'Accessoire de précision 2-en-1 pour le plaquage des bordures et le coiffage des baby hairs : une extrémité brosse à poils denses et souples pour lisser, l’autre peigne fin pour séparer et dessiner les mèches.',
    category_id: 'accessoires',
    category_name: 'Accessoires',
    price: 0,
    sale_price: null,
    images: ['/images/catalogue/produit-15.webp'],
    stock_quantity: 0,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      'Double usage : brosse lissante et peigne de précision',
      'Poils denses et souples, adaptés aux baby hairs',
      'Idéal avec un gel coiffant ou une cire',
      'Sculpte les contours du visage et discipline les petits cheveux rebelles',
    ],
    usage: 'Appliquer un gel ou une cire sur la bordure, lisser avec le côté brosse puis affiner le tracé avec le peigne fin.',
    volume_or_size: 'Lot multicolore (7 coloris)',
  },

  // 16 — BOUDINS À CHIGNON (prix à communiquer par la boutique)
  {
    id: 'prod-16',
    name: 'Boudins à Chignon en Maille – Hair Donut Bun Makers',
    slug: 'boudins-chignon-maille',
    description: 'Créateurs de chignons volumineux en maille légère, ultra-souples et respirants. Ils s’insèrent facilement dans la chevelure et permettent de fixer le chignon avec des épingles en toute sécurité.',
    category_id: 'accessoires',
    category_name: 'Accessoires',
    price: 0,
    sale_price: null,
    images: ['/images/catalogue/produit-16.webp'],
    stock_quantity: 0,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      'Lot de 3 tailles graduées : petit, moyen et grand',
      'Maille noire ultra-légère, respirante et souple',
      'Permet d’y fixer des épingles en toute sécurité',
      'Chignon volumineux sans alourdir la chevelure',
    ],
    usage: 'Passer une queue-de-cheval au centre de l’anneau, répartir les cheveux autour pour couvrir la maille, puis fixer avec un élastique et des épingles.',
    volume_or_size: 'Lot de 3 tailles (S, M, L) – noir',
  },

  // 17 — BANDEAUX ÉLASTIQUES (prix à communiquer par la boutique)
  {
    id: 'prod-17',
    name: 'Bandeaux Élastiques Larges Extensibles – Stretch Headbands',
    slug: 'bandeaux-elastiques-larges',
    description: 'Bandeaux larges en textile extensible doux et antidérapant. Ils maintiennent les cheveux sans comprimer la tête ni laisser de marque, du quotidien à la pose de perruques bandeau.',
    category_id: 'accessoires',
    category_name: 'Accessoires',
    price: 0,
    sale_price: null,
    images: ['/images/catalogue/produit-17.webp'],
    stock_quantity: 0,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      'Textile stretch respirant à haute élasticité',
      'Maintien antidérapant sans compression ni marque',
      'Palette de teintes vives, pastel et neutres',
      'Convient au sport, aux soins du visage et au maquillage',
    ],
    usage: 'Placer le bandeau sur la tête, au-dessus de la ligne de cheveux ou en arrière, et ajuster pour un maintien confortable.',
    volume_or_size: 'Assortiment multicolore',
  },

  // 18 — BONNET DE NUIT EN SATIN (prix à communiquer par la boutique)
  {
    id: 'prod-18',
    name: 'Bonnet de Nuit en Satin à Bande Large – Satin Sleep Bonnet',
    slug: 'bonnet-nuit-satin-bande-large',
    description: 'Bonnet protecteur de nuit en satin soyeux noir, avec un large bandeau élastique souple qui reste en place toute la nuit sans serrer les tempes. Intérieur et extérieur lisses pour limiter les frottements contre l’oreiller.',
    category_id: 'accessoires',
    category_name: 'Accessoires',
    price: 0,
    sale_price: null,
    images: [
      '/images/catalogue/produit-18.webp',
      '/images/catalogue/produit-18-2.webp',
      '/images/catalogue/produit-18-3.webp',
    ],
    stock_quantity: 0,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      'Réduit les frottements et prévient la casse et les fourches',
      'Préserve l’hydratation naturelle des cheveux',
      'Large bande élastique souple, confortable toute la nuit',
      'Convient aux cheveux bouclés, crépus, tressés, vanilles, locks et perruques',
    ],
    usage: 'Enfiler le bonnet avant le coucher en rentrant l’ensemble de la chevelure dans la calotte satinée.',
    volume_or_size: 'Taille unique élastique – noir',
  },

  // 19 — PINCES CRABES RECTANGULAIRES (prix à communiquer par la boutique)
  {
    id: 'prod-19',
    name: 'Pinces Crabes Rectangulaires Mates – Matte Rectangular Claw Clips',
    slug: 'pinces-crabes-rectangulaires-mates',
    description: 'Grandes pinces à cheveux rectangulaires ajourées au fini mat doux au toucher. Leur ressort métallique robuste et leurs dents intérieures arrondies offrent un maintien ferme et antidérapant sans tirer ni casser la fibre capillaire.',
    category_id: 'accessoires',
    category_name: 'Accessoires',
    price: 0,
    sale_price: null,
    images: [
      '/images/catalogue/produit-19.webp',
      '/images/catalogue/produit-19-2.webp',
      '/images/catalogue/produit-19-3.webp',
      '/images/catalogue/produit-19-4.webp',
      '/images/catalogue/produit-19-5.webp',
    ],
    stock_quantity: 0,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      'Ressort métallique robuste et dents arrondies',
      'Maintien ferme et antidérapant sans casser les cheveux',
      'Fini mat doux au toucher',
      'Idéal pour chignons rapides, demi-queues et coiffures plaquées',
    ],
    usage: 'Rassembler les cheveux puis serrer la pince sur la section à maintenir, en répartissant la prise entre les dents.',
    volume_or_size: 'Lot de 4 coloris neutres et pastel',
  },

  // 20 — PEIGNES DÉMÊLANTS (prix à communiquer par la boutique)
  {
    id: 'prod-20',
    name: 'Peignes Démêlants à Dents Larges – Wide-Tooth Detangling Combs',
    slug: 'peignes-demelants-dents-larges',
    description: 'Peignes ergonomiques à dents larges et espacées pour un démêlage en douceur, sur cheveux secs ou mouillés. Ils dénouent les nœuds sans casser la fibre ni défaire le dessin naturel des boucles.',
    category_id: 'accessoires',
    category_name: 'Accessoires',
    price: 0,
    sale_price: null,
    images: ['/images/catalogue/produit-20.webp'],
    stock_quantity: 0,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      'Dents larges et espacées pour un démêlage sans traction',
      'Respecte le dessin naturel des boucles',
      'Parfait pour répartir après-shampoings et masques sous la douche',
      'Convient aux cheveux bouclés, frisés, crépus et aux perruques',
    ],
    usage: 'Démêler des pointes vers les racines, de préférence sur cheveux humides et après application d’un après-shampoing ou masque.',
    volume_or_size: 'Lot de 4 coloris pastel',
  },

  // 21 — DERMA ROLLER (prix à communiquer par la boutique)
  {
    id: 'prod-21',
    name: 'Derma Roller System – 540 Aiguilles (Microneedling)',
    slug: 'derma-roller-system-540-aiguilles',
    description: 'Rouleau de microneedling ergonomique équipé d’une tête de 540 micro-aiguilles fines en disposition croisée. Il stimule la microcirculation du cuir chevelu et la production naturelle de collagène, pour favoriser la revitalisation des follicules et l’absorption des soins.',
    category_id: 'accessoires',
    category_name: 'Accessoires',
    price: 0,
    sale_price: null,
    images: ['/images/catalogue/produit-21.webp'],
    stock_quantity: 0,
    is_featured: false,
    is_new: true,
    is_active: true,
    benefits: [
      'Stimule la microcirculation et la production naturelle de collagène',
      'Favorise l’absorption des sérums et soins capillaires',
      'Manche noir incurvé antidérapant',
      'Tête rotative à 540 micro-aiguilles en disposition croisée',
    ],
    usage: 'Usage strictement personnel. Désinfecter la tête à l’alcool à 70 % avant et après chaque utilisation. Ne pas utiliser sur une peau irritée ou lésée.',
    volume_or_size: '1 rouleau – 540 micro-aiguilles',
  },
];

export async function getProducts(options?: {
  category?: ProductCategory;
  featuredOnly?: boolean;
  newOnly?: boolean;
}): Promise<Product[]> {
  const supabase = getSupabase();
  if (supabase) {
    try {
      let query = supabase.from('products').select('*').eq('is_active', true);
      if (options?.category) {
        query = query.eq('category_id', options.category);
      }
      if (options?.featuredOnly) {
        query = query.eq('is_featured', true);
      }
      if (options?.newOnly) {
        query = query.eq('is_new', true);
      }
      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return data as Product[];
      }
    } catch {
      // Fallback to the embedded official catalogue
    }
  }

  let filtered = [...INITIAL_PRODUCTS];
  if (options?.category) {
    filtered = filtered.filter((p) => p.category_id === options.category);
  }
  if (options?.featuredOnly) {
    filtered = filtered.filter((p) => p.is_featured);
  }
  if (options?.newOnly) {
    filtered = filtered.filter((p) => p.is_new);
  }
  return filtered;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) || null;
}
