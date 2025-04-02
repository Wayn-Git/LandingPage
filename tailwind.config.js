/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],


  
} 



// tailwind.config.js
module.exports = {
  // ... your other Tailwind config
  theme: {
    extend: {
      // ... your other theme extensions
      animation: {
        'carousel': 'carousel 25s linear infinite',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  // ... rest of your config
}