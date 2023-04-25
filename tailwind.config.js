/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      grey: {
        100: "#EDEDED",
        150: "#F0F0F0",
        200: "#8D8D8D",
        250: "#A39D9E",
        300: "#F4F4F4",
        400: "#5F5F5F",
        500: "#F7F7F7",
        600: "#E8E8E8",
        700: "#484848",
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
