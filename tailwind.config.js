/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
    colors: {
      grey: {
        100: "#EDEDED",
        200: "#8D8D8D",
        300: "#F4F4F4",
        800: "#1A1A1A",
        900: "#0A0A0A",
      },
      red: {
        100: "#FFFBF7",
        200: "#EF2C5A",
      },
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
