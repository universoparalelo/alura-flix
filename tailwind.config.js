/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Necesario para Vite
    "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos relevantes de React
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};


