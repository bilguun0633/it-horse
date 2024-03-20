/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "0px",
      screens: {
        DEFAULT: "1440px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        warming: "#EDF3FE",
        blue: "#1967D2",
        gray: "#F8F8F8",
        primary: "#0000FF",
        secondary: "#9FC131",
        danger: "#4E4B66",
        brown: "#E6E8EA",
        base: {
          // 50: "#E6E8EA",
          50: "#2E2E2E",
          100: "#B2B9BE",
          200: "#8C979E",
          300: "#586772",
          400: "#374956",
          500: "#051C2C",
          600: "#04141F",
        },
        background: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
