/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-size': '1.5rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3',
      }
    },
  },
  plugins: [],
};
