/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure the files to scan for Tailwind classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Define the custom fonts to be used with Tailwind's `font-` utilities
      fontFamily: {
        prata: ["var(--font-prata)"],
        cinzel: ["var(--font-cinzel)"],
      },
    },
  },
  darkMode: false,
  plugins: [],
};
