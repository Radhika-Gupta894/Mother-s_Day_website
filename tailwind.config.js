/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          soft: '#FFD1DC',
          vibrant: '#FF91A4',
        },
        lavender: '#E6E6FA',
        peach: '#FFDAB9',
        'baby-blue': '#B0E0E6',
        cream: '#FFFDD0',
      },
      fontFamily: {
        handwritten: ['Dancing Script', 'cursive'],
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        heartbeat: {
          '0%, 30%, 60%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.1)' },
          '45%': { transform: 'scale(1.15)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
