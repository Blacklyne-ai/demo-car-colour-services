// 7 product categories — verbatim from the original site's shop structure.

export type Category = {
  slug: string;
  title: string;
  blurb: string;
  // Lucide icon name (rendered via @lucide/astro)
  icon: 'paintbucket' | 'spray-can' | 'layers' | 'shapes' | 'spray' | 'history' | 'wrench';
  /** Real product count in the catalogue. Operator confirms exact figures. */
  count: string;
  /** Hero stock photograph used inside the category card */
  image: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: 'car-paints',
    title: 'Car Paints',
    blurb: 'Basecoats, solid colours, metallic, pearl and xirallic finishes mixed to OEM spec from leading paint manufacturers.',
    icon: 'paintbucket',
    count: '200+ lines',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: '2k-clear-coat',
    title: '2K Clear-Coat',
    blurb: 'Two-pack clearcoats engineered for depth, gloss retention and rapid through-cure. HS, VHS and MS systems in stock.',
    icon: 'layers',
    count: '40+ lines',
    image: 'https://images.unsplash.com/photo-1605618826115-fb9e0ab4cae5?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: '2k-primers',
    title: '2K Primers',
    blurb: 'High-build, etch and surfacer primers for steel, aluminium and plastic substrates. Sanding-grade and wet-on-wet options.',
    icon: 'shapes',
    count: '60+ lines',
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'car-repair-filler',
    title: 'Car Repair Filler Products',
    blurb: 'Lightweight body fillers, fibreglass repair, alloy fillers and stopper for every dent, ding and panel repair.',
    icon: 'wrench',
    count: '80+ lines',
    image: 'https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e6e?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'touch-up-aerosols',
    title: 'Car Touch Up Paint & Aerosols',
    blurb: 'Aerosols made-to-order on the same day. Any car colour, any year - matched, mixed and dispatched.',
    icon: 'spray-can',
    count: '180+ lines',
    image: 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'classic-car',
    title: 'Classic Car Products & Services',
    blurb: 'Cellulose, synthetic and period-correct refinish systems for restoration projects from one-offs to concours-grade.',
    icon: 'history',
    count: '70+ lines',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'tools-equipment',
    title: 'Tools & Equipment',
    blurb: 'SATA spray guns, Norton abrasives, masking, mixing systems, PPE and consumables - the bodyshop floor in one shop.',
    icon: 'wrench',
    count: '120+ lines',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80&auto=format&fit=crop',
  },
];
