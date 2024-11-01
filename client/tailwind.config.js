/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PopYellow: '#FFA303',
        GreenBrown: '#0E3506',
        KindaWhite: '#FFE0AE',
        FakeBlack: '#1d1c0d',
        CoralOrange: '#FF4500',

      }
    },
  },
  plugins: [],
}