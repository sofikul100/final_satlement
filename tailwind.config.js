/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant files
  ],
  theme: {
     container: {
      center: true, // centers container horizontally
      padding: '15px', // padding left & right: 15px

      screens: {
        sm: '540px',  // Bootstrap sm max-width
        md: '720px',  // Bootstrap md max-width
        lg: '960px',  // Bootstrap lg max-width
        xl: '1140px', // Bootstrap xl max-width
        '2xl': '1320px', // Bootstrap xxl max-width
      },
    },
    extend: {}, // Customize your theme here
  },
  plugins: [],
};
