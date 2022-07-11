/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      main: '#35b8be'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
