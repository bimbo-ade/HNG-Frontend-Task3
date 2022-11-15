/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      purple: " #A02279",
      black: "#434343",
      white: "#FFFFFF",
      gray: "gray",
      bgBlack: " #1D1D1E;",
    },
    fontFamily: {
      rose: ["Red Rose", "cursive"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 500,
      xbold: 600,
      xxbold: 700,
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
