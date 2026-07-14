/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0a0a09', gold: '#c6a15b', cream: '#f6f2ea', stone: '#aaa49a' },
      fontFamily: { display: ['Cormorant Garamond', 'serif'], sans: ['Manrope', 'sans-serif'] },
      letterSpacing: { luxe: '.24em' },
      boxShadow: { gold: '0 12px 40px rgba(198,161,91,.16)' },
    },
  },
  plugins: [],
}
