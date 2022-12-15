/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    // colors: {
    //   primaryRed: "#D90429",
    //   secondaryRed: "#EF233C",
    //   primaryWhite: "#EDF2F4",
    //   primaryDark: "#2B2D42",
    //   secondaryDark: "#8D99AE",
    // },
  },
  daisyui: {
    themes: ["cyberpunk"],
  },
  plugins: [require("daisyui")],
};
