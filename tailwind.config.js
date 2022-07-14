/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-black': '#050917',
      'white': '#FFFFFF',
      'black': '#101010',
      'dark-gray': '#232323',
      'gray': '#555555',
      'light-blue': '#0FB8FE',
      'blue': '#5383FF',
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
