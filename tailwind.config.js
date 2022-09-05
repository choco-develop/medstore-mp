/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      main: '#1a8bb5',
      top: '#006F98',
      temp: '#89E2FF',
      busy: '#1a8bb582',
      muifocus: '#1c64f2',
    },
    screens: {
      xs: '329px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      lato: ['Lato', 'san-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), {/* eslint-disable-line */}
  ],
};
