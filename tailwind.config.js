/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // ✅ Include ts/tsx files here
  ],
  theme: {
    extend: {
      colors: {
        'infinity-dark': '#000000',
        'infinity-accent': '#4b0082', // Deep purple for neon
        'glass-bg': 'rgba(255, 255, 255, 0.1)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [],
}
