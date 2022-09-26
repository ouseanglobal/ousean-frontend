/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        partners: '#F0E2E2',
        testimoni: '#D9D9D9',
        cta2: '#A73C3C',
      },
      fontFamily: {
        Montserrat: ['Montserrat'],
        Poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
