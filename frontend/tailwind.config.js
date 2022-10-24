/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins'],
      },
      colors: {
        'main': '#0665A6',
        'active-btn': '#85AAC5',
        'card-green': '#21B692',
        'card-red': '#D85C5C',
        'card-yellow': '#E9BE5D',
        'card-blue': '#5C7ED8',
        'btn-purple': '#4874E9',

      },
      backgroundImage: {
        'login': 'url(../public/gambar/bg.png)'
      }
    },
  },
  plugins: [],
}
