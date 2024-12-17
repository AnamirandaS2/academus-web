/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#F2F3F4", // Anti-Flash White
      black: "#1E1E1E",
      "blue-900": "#020035", // Midnight Blue
      "blue-700": "#02066F", // Dark Royalty
      "blue-500": "#2000B1", // Deep Sea Exploration
      "blue-100": "#EBEAED", // Lace Cap
      "orange-500": "#ED4B00", // Kimchi
      "gray-200": "#9F9F9F",
      "black-60": "rgba(0, 0, 0, 0.6)",
    },
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "Arial"],
      },
    },
  },
  plugins: [],
};
