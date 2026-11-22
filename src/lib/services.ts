export interface SalonServiceItem {
  id: string;
  name: string;
  price: number;
  duration?: string;
  description?: string;
  popular?: boolean;
}

export interface SalonCategory {
  id: string;
  title: string;
  subtitle: string;
  inclusions: string;
  badge?: string;
  items: SalonServiceItem[];
}

export const SALON_SERVICES: SalonCategory[] = [
  {
    id: 'braids',
    title: 'BRAIDS',
    subtitle: 'Tresses régulières et impeccables avec mèches de marque Outre incluses pour un rendu léger et soyeux.',
    inclusions: 'Mèches Outre, main-d’œuvre, shampooing et brushing inclus.',
    badge: 'Mèches Outre Incluses',
    items: [
      {
        id: 'braids-grosses',
        name: 'Braids grosses',
        price: 22000,
        duration: '2h30 – 3h',
        description: 'Grosses nattes régulières, légères et confortables. Idéales pour un style affirmé et rapide.',
      },
      {
        id: 'braids-moyennes',
        name: 'Braids moyennes',
        price: 25000,
        duration: '3h30 – 4h',
        description: 'La taille classique par excellence. Volume harmonieux et tenue durable plusieurs semaines.',
        popular: true,
      },
      {
        id: 'braids-petites',
        name: 'Braids petites',
        price: 27000,
        duration: '4h30 – 5h',
        description: 'Tresses fines ultra-définies avec un mouvement ultra-fluide et une longévité maximale.',
      },
    ],
  },
  {
    id: 'makoussi',
    title: 'MAKOUSSI',
    subtitle: 'La coiffure ivoirienne emblématique revisitée avec le savoir-faire et la délicatesse NYDA.',
    inclusions: 'Mèches, main-d’œuvre, shampooing et brushing inclus.',
    items: [
      {
        id: 'makoussi-standard',
        name: 'Makoussi classique',
        price: 12000,
        duration: '2h – 2h30',
        description: 'Nattes couchées élégantes et structurées, douces pour les tempes et parfaitement tracées.',
        popular: true,
      },
    ],
  },
  {
    id: 'boho-braids',
    title: 'BOHO BRAIDS',
    subtitle: 'L’élégance bohème par excellence. Alliance sublime de tresses protectrices et de mèches bouclées vaporeuses.',
    inclusions: 'Mèches, main-d’œuvre, shampooing et brushing inclus.',
    badge: 'Tendance Signature',
    items: [
      {
        id: 'boho-longues',
        name: 'Boho Braids longues',
        price: 27000,
        duration: '4h – 4h30',
        description: 'Longueur majestueuse avec boucles soyeuses sur les longueurs et pointes.',
        popular: true,
      },
      {
        id: 'boho-courtes',
        name: 'Boho Braids courtes / mi-longues',
        price: 25000,
        duration: '3h – 3h30',
        description: 'Style chic et dynamique au niveau des épaules ou de la clavicule, léger et très aérien.',
      },
    ],
  },
  {
    id: 'nappy',
    title: 'NAPPY & CHEVEUX NATURELS',
    subtitle: 'Rituels bienveillants et coiffures protectrices pour chérir et sublimer la beauté de vos cheveux crépus et frisés.',
    inclusions: 'Diagnostic capillaire, soin adapté et coiffage délicat sans douleur.',
    items: [
      {
        id: 'nappy-simple',
        name: 'Nappy simple',
        price: 4000,
        duration: '45 min – 1h',
        description: 'Démêlage délicat, hydratation et coiffure protectrice sobre (nattes simples ou vanilles de base).',
      },
      {
        id: 'nappy-intermediaire',
        name: 'Nappy intermédiaire',
        price: 5000,
        duration: '1h15 – 1h30',
        description: 'Soin nourrissant ciblé, traçages géométriques et coiffage protecteur soigné.',
      },
      {
        id: 'nappy-prestige',
        name: 'Nappy prestige',
        price: 7000,
        duration: '1h45 – 2h',
        description: 'Rituel complet : bain d’huile tiède ou masque réparateur profond, massage crânien et coiffure artistique élaborée.',
        popular: true,
      },
    ],
  },
];
