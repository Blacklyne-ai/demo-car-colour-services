// Single source of truth for site-wide constants.
// Brand DNA extracted from the storefront signage and the CCS roundel.

export const SITE = {
  name: 'Car Colour Services',
  legalName: 'Car Colour Services Ltd',
  short: 'CCS',
  tagline: 'The Complete Colour Service',
  domain: 'carcolourservices.co.uk',
  url: 'https://demo-car-colour-services.pages.dev',

  founded: 1990,
  yearsTrading: 35, // verified from Companies House #02475965 (Apr 1990)
  classicYears: 25,
  productCount: 600,
  brandCount: 40,

  // Contact
  phone: '01708 746468',
  phoneTel: '+441708746468',
  email: 'hello@carcolourservices.co.uk',
  emailWeb: 'sales@carcolourservices.co.uk',
  address: {
    street: '92-94 Mawney Road',
    city: 'Romford',
    county: 'Essex',
    postcode: 'RM7 7JB',
    country: 'United Kingdom',
    region: 'Greater London / South East',
  },
  // Approximate geographic coordinates for Mawney Road, Romford
  geo: { lat: 51.5774, lng: 0.1772 },

  // Open hours — 6-day pattern (Sun closed)
  hours: [
    { day: 'Mon', open: '08:30', close: '17:00' },
    { day: 'Tue', open: '08:30', close: '17:00' },
    { day: 'Wed', open: '08:30', close: '17:00' },
    { day: 'Thu', open: '08:30', close: '17:00' },
    { day: 'Fri', open: '08:30', close: '17:00' },
    { day: 'Sat', open: '09:00', close: '13:00' },
    { day: 'Sun', open: null,    close: null    },
  ],

  // Social — Facebook is the only active platform
  social: {
    facebook: 'https://www.facebook.com/CarColourServices/',
    linkedin: 'https://uk.linkedin.com/company/car-colour-services-limited',
  },

  // Companies House
  companiesHouseNumber: '02475965',
  vat: 'GB ••• ••• ••• (operator to confirm)',
} as const;

export type SiteHours = typeof SITE.hours[number];

// Day-name to numeric index helpers (Sun = 0 in JS Date)
export const DAY_INDEX: Record<SiteHours['day'], number> = {
  Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
};
