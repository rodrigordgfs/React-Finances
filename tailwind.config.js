/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      primary: {
        light: "#FAFAFA",
        dark: "#0D0D0D",
      },
      secondary: {
        light: "#FFFFFF",
        dark: "#252525",
      },
      tertiary: {
        light: "#EAEAEA",
        dark: "#3F3F3F",
      },
      text: {
        primary: {
          light: "#0d0d0d",
          dark: "#f2f2f2",
        },
        secondary: {
          light: "",
          dark: "",
        },
      },
      positive: {
        DEFAULT: "#00B300",
        hover: "#33691E",
      },
      negative: {
        DEFAULT: "#D50000",
        hover: "#B71C1C",
      },
      info: {
        DEFAULT: "#2962FF",
        hover: "#01579B",
      },
      outline: {
        positive: "#00B300",
        negative: "#D50000",
      },
    },
  },
  plugins: [],
};
