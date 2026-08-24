export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00C2FF',
          gold: '#D4AF37',
          coral: '#FF6B4A',
          dark: '#0A192F',
          panel: 'rgba(10, 25, 47, 0.7)',
          border: 'rgba(255, 255, 255, 0.1)',
          text: '#F2F2ED',
          muted: '#A3A3A3'
        }
      }
    },
  },
  plugins: [],
}