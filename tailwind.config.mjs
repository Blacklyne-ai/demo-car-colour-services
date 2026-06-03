/** @type {import('tailwindcss').Config} */
// Car Colour Services — palette extracted from the original shopfront signage
// and the CCS roundel monogram:
//   red   #CE2A2D   ("CAR" wordmark, outer C letters, outer roundel ring)
//   blue  #1C3A6F   ("COLOUR" wordmark, central S, inner roundel ring)
//   bone  #F5F4F0   warm off-white sign background tone
// Exposed as RGB triplets so Tailwind opacity modifiers work (bg-brand-red/80).
// Single source of truth lives in src/styles/global.css :root.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: 'rgb(var(--rgb-red) / <alpha-value>)',
          'red-deep': 'rgb(var(--rgb-red-deep) / <alpha-value>)',
          'red-soft': 'rgb(var(--rgb-red-soft) / <alpha-value>)',
          blue: 'rgb(var(--rgb-blue) / <alpha-value>)',
          'blue-deep': 'rgb(var(--rgb-blue-deep) / <alpha-value>)',
          'blue-soft': 'rgb(var(--rgb-blue-soft) / <alpha-value>)',
          ink: 'rgb(var(--rgb-ink) / <alpha-value>)',
          bone: 'rgb(var(--rgb-bone) / <alpha-value>)',
        },
        ink: 'rgb(var(--rgb-ink) / <alpha-value>)',
        muted: 'rgb(var(--rgb-muted) / <alpha-value>)',
        'muted-soft': 'rgb(var(--rgb-muted-soft) / <alpha-value>)',
        line: 'rgb(var(--rgb-line) / <alpha-value>)',
        bone: 'rgb(var(--rgb-bone) / <alpha-value>)',
        snow: 'rgb(var(--rgb-snow) / <alpha-value>)',
        ok: 'rgb(var(--rgb-ok) / <alpha-value>)',
        amber: 'rgb(var(--rgb-amber) / <alpha-value>)',
      },
      fontFamily: {
        // Headlines: Oswald — matches the storefront's bold condensed sans wordmarks.
        // Body: Inter — modern humanist sans, neutral, professional.
        // Mono: JetBrains Mono — paint codes, technical specs.
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['Oswald', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'monospace'],
      },
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(15 23 42 / 0.04), 0 2px 4px rgb(15 23 42 / 0.04)',
        lift: '0 10px 30px -10px rgb(15 23 42 / 0.18), 0 4px 12px -2px rgb(15 23 42 / 0.08)',
        glow: '0 0 0 1px rgb(var(--rgb-red) / 0.18), 0 12px 36px -8px rgb(var(--rgb-red) / 0.32)',
        'glow-blue': '0 0 0 1px rgb(var(--rgb-blue) / 0.20), 0 12px 36px -8px rgb(var(--rgb-blue) / 0.30)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'marquee-slow': 'marquee 90s linear infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite',
        float: 'floatGentle 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
