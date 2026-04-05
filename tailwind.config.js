// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Existing
        prata: ["var(--font-prata)"],
        cinzel: ["var(--font-cinzel)"],

        // New blog-specific Google Fonts
        playfair: ["var(--font-playfair)", "serif"], // Headings
        outfit: ["var(--font-outfit)", "sans-serif"], // Body text
        abril: ["var(--font-abril)", "serif"], // Accents
      },
    },
  },
  plugins: [],
};
