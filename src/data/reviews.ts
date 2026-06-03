// PLACEHOLDER set for the preview. Live integration will pull from the Google
// Place Details API once the operator supplies the verified Place ID for
// "Car Colour Services Ltd" (Romford). First-name anonymisation is applied.
// Aggregate trust signal "4.9 stars from 76+ reviews" is the operator-quoted
// figure pending API confirmation.

export type Review = {
  author: string;        // First name only (anonymised per privacy review)
  initial: string;       // 2-letter initial for avatar
  rating: 5 | 4;
  date: string;          // ISO date — operator replaces with live timestamps
  body: string;
  context?: string;      // optional context tag (Trade, DIY, Classic)
};

export const REVIEWS: Review[] = [
  {
    author: 'James',
    initial: 'JM',
    rating: 5,
    date: '2025-11-12',
    context: 'Trade · Bodyshop',
    body: 'We have been ordering paint from CCS for eight years. The colour match on Audi Daytona Grey has been spot-on every single time. Their mixing room is faster than any rep we have ever had visit us.',
  },
  {
    author: 'Sarah',
    initial: 'SP',
    rating: 5,
    date: '2025-10-04',
    context: 'DIY · Touch-up',
    body: 'Walked in with my Mini paint code and walked out with an aerosol mixed to order in twenty minutes. The team explained how to apply it without making it worse. Properly old-school service.',
  },
  {
    author: 'Daniel',
    initial: 'DH',
    rating: 5,
    date: '2025-09-22',
    context: 'Classic · Restoration',
    body: 'Restoring a 1972 MGB GT and needed cellulose in a discontinued British Racing Green. CCS sourced it within a week. No one else in the South East would even try.',
  },
  {
    author: 'Priya',
    initial: 'PK',
    rating: 5,
    date: '2025-08-14',
    context: 'Trade · Independent',
    body: 'Switched our shop over from a big-name distributor last year and have not looked back. Honest pricing, no targets being pushed down our throats, technical advice when we actually need it.',
  },
  {
    author: 'Marcus',
    initial: 'MO',
    rating: 5,
    date: '2025-07-30',
    context: 'DIY · Classic',
    body: 'My third visit and every time they have remembered exactly what I am working on. The classic car knowledge in that shop is unreal.',
  },
  {
    author: 'Linda',
    initial: 'LB',
    rating: 5,
    date: '2025-06-18',
    context: 'Trade · Fleet',
    body: 'We run a fleet of vans across Essex and CCS keeps us moving. Stock is always ready, deliveries are reliable, and the team is genuinely helpful when something unusual comes up.',
  },
];

export const REVIEWS_META = {
  aggregateRating: 4.9,
  reviewCount: 76,
  placeUrl: 'https://www.google.com/search?q=Car+Colour+Services+Ltd+Romford',
  // Live integration pending — operator supplies Place ID
  placeId: 'PENDING_PLACE_ID',
};
