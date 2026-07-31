/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          off: '#F8F7F2',
          soft: '#EFE9E0',
          lilac: '#E6EBF5',
          primary: '#0D1F2D',
          primaryHover: '#051420',
          charcoal: '#1A1A1A',
          muted: '#888888',
          lavender: '#D4EBF7',
          accent: '#D4AF37',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Nunito Sans"', 'sans-serif'],
        cursive: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        soft: '0 14px 36px rgba(13, 31, 45, 0.12)',
      },
      backgroundImage: {
        'brand-radial':
          'radial-gradient(circle at 0% 0%, rgba(230,235,245,0.9) 0%, rgba(248,247,242,0) 62%)',
      },
    },
  },
  plugins: [],
}

