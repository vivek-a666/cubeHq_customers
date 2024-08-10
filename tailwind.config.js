/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pampas: "#f3f1eb",
        darkorg:"#D97757"
      },
      
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],

}