/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#05090c', 900: '#080e13', 800: '#0b1218', 700: '#111b23', 600: '#16212a' },
        ice: { DEFAULT: '#3fa9e0', light: '#7cc8ee', deep: '#1f6f9f' },
        flame: { DEFAULT: '#f97316', light: '#fbbf24', deep: '#c2410c' },
        steel: { DEFAULT: '#aab7c0', dim: '#7d8b95' },
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
