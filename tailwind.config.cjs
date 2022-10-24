/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      sm2: 18,
      md: 26,
      lg: 32
    },
    colors: {
      gray: {
        100: '#CDABAB',
        200: '#DEDEDE',
        900: '#2E2020'
      },
      purple: {
        500: '#6C63FF',
        600: '#5348FF'
      },
      white: {
        50: '#FFFFFF'
      },
      red: {
        500: '#E83737',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
