# Car Colour Services — 2027 Preview

Sales-weapon preview for **Car Colour Services Ltd**, the independent automotive paint supplier at 92-94 Mawney Road, Romford. Built in Astro 5 + Tailwind v3.4 + @lucide/astro. Static output, Cloudflare Pages-ready.

## Quick start

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # → /dist (static HTML)
```

## Stack

- **Astro 5** (static, no SSR, no `_worker.js`)
- **Tailwind v3.4** (v4 breaks Cloudflare Pages)
- **@lucide/astro** for icons
- **@fontsource** for Oswald (display), Inter (body), JetBrains Mono (codes)
- **@astrojs/sitemap**

## Brand DNA

Extracted from the actual Romford storefront signage + CCS roundel logo:

- **Red** `#CE2A2D` — `CAR` and `SERVICES` wordmark, outer Cs, outer ring
- **Blue** `#1C3A6F` — `COLOUR` wordmark, central S, inner ring
- **Bone** `#F5F4F0` — sign-panel background tone
- **Display font** Oswald (bold condensed sans matches storefront wordmarks)
- **Body font** Inter (humanist sans)
- **Mono font** JetBrains Mono

Tokens live in [`src/styles/global.css`](src/styles/global.css) `:root` and [`tailwind.config.mjs`](tailwind.config.mjs).

## Pages

1. `/` — homepage with cinematic hero, independence USP, 7 categories, colour-match tool, featured products, classic-cars heritage moment, brand marquee, body-shop referral map, reviews, CTA band
2. `/shop` — catalogue index with search + filter chips
3. `/shop/[category]` — 7 dynamic category landings
4. `/colour-matching` — interactive 3-step colour-match form + paint-swatch grid
5. `/classic-cars` — 25-year heritage page
6. `/trade-account` — B2B application form
7. `/body-shop-referrals` — Essex network map + referral request form
8. `/who-we-are` — story timeline + verbatim copy
9. `/contact` — asymmetric editorial layout, no boring form-left-info-right
10. `/privacy` `/cookies` `/terms` — UK GDPR + COSHH compliant
11. `/404` — on-brand with category recovery

## Quality

See [`JUDGEMENT_CALLS.md`](JUDGEMENT_CALLS.md) and [`QA_REPORT.md`](QA_REPORT.md) for full audit.

## Deploy

Cloudflare Pages. Framework preset: Astro. Build: `npm run build`. Output: `dist`.
