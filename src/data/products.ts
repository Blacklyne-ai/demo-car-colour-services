// Featured products — the four highlighted on the original site.
// Operator confirms current pricing pre-launch.

export type Product = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  size: string;
  price: string;
  blurb: string;
  image: string;
  tags: string[];
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    slug: 'roar-610-extreme-cut-plus-1kg',
    title: 'ROAR 610 Extreme Cut PLUS',
    brand: 'ROAR',
    category: 'Polishing Compound',
    size: '1 kg',
    price: '£24.95',
    blurb: 'Bodyshop-grade cutting compound that removes P1500 sand-scratches in a single pass. Silicone-free, dust-free finish on solid, metallic and clear coats.',
    image: 'https://images.unsplash.com/photo-1632823471565-1ec3c0e7e10c?w=900&q=80&auto=format&fit=crop',
    tags: ['Trade', 'Polishing', 'Best Seller'],
  },
  {
    slug: '5w-smd-led-rechargeable-spray-gun-light',
    title: '5W SMD LED Rechargeable Spray Gun Light',
    brand: 'CCS',
    category: 'Tools & Equipment',
    size: '5 W · 6500 K',
    price: '£42.50',
    blurb: 'Magnetic-mount LED inspection light. Daylight-balanced 6500 K beam to read panel flow and metallic orientation while you spray.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80&auto=format&fit=crop',
    tags: ['Tools', 'Trade Pick'],
  },
  {
    slug: 'masking-paper-jumbo',
    title: 'Masking Paper Jumbo Size',
    brand: 'CCS',
    category: 'Masking',
    size: '900 mm × 450 m',
    price: '£18.95',
    blurb: 'Heavyweight 40 gsm masking paper jumbo roll. Solvent-resistant, lint-free, ideal for whole-vehicle masking ahead of full re-spray work.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&q=80&auto=format&fit=crop',
    tags: ['Masking', 'Workshop'],
  },
  {
    slug: 'novol-spectral-klar-565-vhs-clear-kit',
    title: 'Novol Spectral Klar 565 VHS Clear Kit',
    brand: 'Novol',
    category: '2K Clear-Coat',
    size: '5 L kit',
    price: '£89.00',
    blurb: 'Very-high-solids 2K clear coat with hardener. Brilliant gloss, scratch-resistant, suitable for partial and full panel repairs.',
    image: 'https://images.unsplash.com/photo-1605618826115-fb9e0ab4cae5?w=900&q=80&auto=format&fit=crop',
    tags: ['Clear-Coat', 'Pro'],
  },
];
