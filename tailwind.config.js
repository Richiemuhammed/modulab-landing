/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Variable', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        chip: '9999px',
      },
      colors: {
        grey: {
          10: '#f7f8fa',
          20: '#f1f2f3',
          30: '#e1e2e3',
          40: '#cfd1d4',
          50: '#b1b5bb',
          60: '#8b9099',
          70: '#5c5f66',
          80: '#23262f',
        },
        primary: '#3b338b',
        accent: '#f8bc04',
      },
      borderColor: {
        DEFAULT: '#e1e2e3', // border-default
      },
    },
  },
  plugins: [],
}

