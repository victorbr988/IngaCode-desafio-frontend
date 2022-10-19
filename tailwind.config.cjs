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
      md: 24,
      lg: 32
    },
    colors: {
      gray: {
        100: '#CDABAB',
        900: '#2E2020'
      },
      purple: {
        500: '#6C63FF',
        600: '#5348FF'
      },
      white: {
        50: '#FFFFFF'
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
