/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "sm": "320px",
      /* For mobiles: */
      /* your CSS here */
      "md": "481px",
      // => @media (min-width: 640px) { ... }
      "lg": "769px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1025px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1201px",
    },
    extend: {
      spacing: {
        "87%": "87%",
      },
      colors: {
        "bg": "#ffffff",
        "accent": "#d08642",
        "primary" :"#150080",
        "bg-accent" :"#e7e8e9",
        "disabled" :"#9c9c9c",
        "foreground" :"#2d264b",



      },
      backgroundImage: {
        'custom-color': "linear-gradient(#313D5D, #313D5D)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '13': 'repeat(13, minmax(0, 1fr))',
      }
    },

    darkMode: "class",
    plugins: [],
  },
};
