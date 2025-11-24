/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-ivory': '#FDFBF7',
        'brand-beige': '#F5F1E8',
        'brand-gold': '#D4AF37',
        'brand-gold-light': '#E5C565',
        'brand-wood': '#8B5A2B',
        'brand-dark': '#2A2A2A',
        'brand-gray': '#666666',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
