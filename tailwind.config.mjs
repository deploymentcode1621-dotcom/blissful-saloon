/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFF9F5",
        blush: "#F8E6E6",
        rose: "#C9898D",
        nude: "#D8B5A5",
        plum: "#4A2634",
        charcoal: "#272124",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        label: ["var(--font-label)", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
