/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    ".pages/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'header-color': '#15b981',
      'footer-color': '#15b981',
      'main-color': '#ECFDF5',
      'form-color': '#15b981',
    }
  },
  plugins: [],
}
