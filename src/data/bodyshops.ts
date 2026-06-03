// Body-shop referral network across Essex and Greater London.
// Areas confirmed via the original site's body-repairs pages.
// Specific shop names withheld pending operator approval.

export type ReferralArea = {
  area: string;
  postcode: string;
  description: string;
  /** Approximate centre coordinates for the SVG map pin */
  x: number; // 0-100 horizontal position on stylised map
  y: number; // 0-100 vertical position on stylised map
};

export const REFERRAL_AREAS: ReferralArea[] = [
  { area: 'Romford',     postcode: 'RM',  description: 'Our home patch and walk-in HQ.', x: 70, y: 56 },
  { area: 'Brentwood',   postcode: 'CM14',description: 'Trusted bodyshop partners along the A12.', x: 80, y: 42 },
  { area: 'Chelmsford',  postcode: 'CM',  description: 'Long-standing trade relationships across central Essex.', x: 88, y: 28 },
  { area: 'Southend',    postcode: 'SS',  description: 'Coastal referrals for paint-work and panel repair.', x: 96, y: 64 },
  { area: 'Ilford',      postcode: 'IG',  description: 'East-London bodyshops on the doorstep.', x: 56, y: 60 },
  { area: 'Dagenham',    postcode: 'RM10',description: 'Heavy-trade refinish partners near the A13.', x: 62, y: 70 },
  { area: 'Hornchurch',  postcode: 'RM11',description: 'Independent shops we recommend for private work.', x: 74, y: 64 },
  { area: 'Upminster',   postcode: 'RM14',description: 'Specialist restorers serving classic owners.', x: 78, y: 60 },
  { area: 'Basildon',    postcode: 'SS14',description: 'Volume bodyshops for fleet and commercial.', x: 92, y: 52 },
  { area: 'Stratford',   postcode: 'E15', description: 'City-edge partners for insurance work.', x: 48, y: 64 },
];
