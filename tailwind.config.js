/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#025015",
        softprimary: "#00801f",
        secondary: "#b7755d",
        darksecondary: "#80553e",
      },
      backgroundImage: {
        credBg: 'url(/src/assets/tree_bg.png)'
      }
    },
  },
  plugins: [],
};
