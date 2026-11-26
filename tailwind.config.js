// Values live in src/index.css, where light mode overrides them.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fg: v('fg'),
        ink: { DEFAULT: v('ink'), 900: v('ink-900'), 800: v('ink-800'), 700: v('ink-700'), 600: v('ink-600') },
        ice: { DEFAULT: v('ice'), light: v('ice-light'), deep: v('ice-deep') },
        flame: { DEFAULT: '#f97316', light: v('flame-light'), deep: '#c2410c' },
        steel: { DEFAULT: v('steel'), dim: v('steel-dim') },
      },
      fontFamily: {
        display: ['"Sora Variable"', 'Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: { xl2: '0.85rem' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseRing: { '0%': { boxShadow: '0 0 0 0 rgba(249,115,22,.55)' }, '100%': { boxShadow: '0 0 0 14px rgba(249,115,22,0)' } },
        shimmer: { from: { backgroundPosition: '200% 0' }, to: { backgroundPosition: '-200% 0' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        pulseRing: 'pulseRing 2s ease-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
