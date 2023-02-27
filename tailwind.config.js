/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // breakpoints for switching from mobile to tablet to PC
    screens: {
      // xs, sm, md, lg, xl
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    // any custom extensions of default styles go here
    extend: {
      // specifies custom colors
      colors: {
        // can be hex values, rgb, hsl, or any other color type
        // example: "bg-brightRed" becomes a class if "brightRed" is defined here
      }
    },
  },
  plugins: [],
}
