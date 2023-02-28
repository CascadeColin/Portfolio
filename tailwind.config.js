/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // breakpoints for switching from mobile to tablet to PC
    // screens: {
    //   // => @media (min-width: 640px and max-width: 767px) { ... }
    //   sm: { min: "640px", max: "767px" },
    //   md: { min: "768px", max: "1023px" },
    //   lg: { min: "1024px", max: "1279px" },
    //   xl: { min: "1280px", max: "1535px" },
    //   // => @media (min-width: 1536px) { ... }
    //   "2xl": { min: "1536px" },
    // },
    // any custom extensions of default styles go here
    extend: {
      // specifies custom colors
      colors: {
        // can be hex values, rgb, hsl, or any other color type
        // example: "bg-brightRed" becomes a class if "brightRed" is defined here
      },
      // can add as many custom config objs as needed
    },
  },
  // can import plugins that add additionally functionality
  plugins: [],
};
