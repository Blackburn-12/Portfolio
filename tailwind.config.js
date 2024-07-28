/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark": "#0F0F0F",
        "primary": "#edcd4d"
      },
      fontFamily:{
      "Quicksand": ["Quicksand"],
      "BebasNeue": ["Bebas Neue"]
      }
    },
  },
  plugins: [],
}