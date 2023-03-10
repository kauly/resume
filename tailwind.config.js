const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fffefc",
      orange: "#cf534a",
      black: "#111111",
      blue: "#2d96d1",
      beige: "#f9f5f1",
    },
    extend: {
      fontFamily: {
        sans: ["--font-mont", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "btn-hover": "0.4rem 0.4rem 0 #2d96d1",
        "btn-active": "0 0 0 #2d96d1",
        box: "0.4rem 0.4rem 0 #111111",
      },
    },
  },
  plugins: [],
};
