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
      "gray-200": "#9F9F9F", // Cinza suave
      "black-60": "rgba(0, 0, 0, 0.6)",
      "black-10": "rgba(0, 0, 0, 0.1)",
      "text-gray": "rgba(4, 1, 54, 0.7)",
      "green-500": "#00B109",
    },
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "Arial"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".styled-scroll": {
          "scrollbar-width": "none",
          "scrollbar-color": "#4542571F #4542571F",
        },
        ".styled-scroll::-webkit-scrollbar": {
          width: "4px",
        },
        ".styled-scroll::-webkit-scrollbar-track": {
          background: "#F2F3F4",
        },
        ".styled-scroll::-webkit-scrollbar-thumb": {
          background: "#9F9F9F",
          "border-radius": "2px",
        },
        ".styled-scroll::-webkit-scrollbar-thumb:hover": {
          background: "#9F9F9F",
        },
      });
    },
  ],
};
