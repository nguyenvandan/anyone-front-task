/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'koulen': ['Koulen', 'sans-serif'],
      },
      colors: {
        // primary
        t_primary_400: "#906FEE",
        t_primary_600: "#3D06D7",
        // gray
        t_gray_200: "#CFCADF",
        // black
        t_dark_500: "#1E0E4C"
      }
    },
  },
  plugins: [],
}
