/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fundo-tendencia':"url('https://w7.pngwing.com/pngs/486/125/png-transparent-sound-pixel-wave-green-pixel-sound-wave-curve-green-sound-waves-angle-text-symmetry.png')"
        
      },
      
    },
  },
  plugins: [],
}