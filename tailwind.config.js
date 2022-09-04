/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-patern": "url('/src/assets/imageedit_1_2082326220.gif')",
      },
      fontFamily: {
        dana: ["dana"],
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
