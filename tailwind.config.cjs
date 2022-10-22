/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",
      black: "#212228",
      gray: {
        900: "#242631",
        800: "#2A2F48",
        700: "#313859",
        400: "#646DA0",
        100: "#D3D8F5",
      },
      white: "#FFFFFF",
      green: {
        500: "#35FFAA",
        300: "#59FFB9",
      },
      red: {
        500: "#FF3535",
        300: "#FF5656",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
