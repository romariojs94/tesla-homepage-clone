/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'animation': 'float 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
            '0%': { transform: 'translate(-50%, -40%)' },
            '30%': { transform: 'translate(-50%, -20%)' },
            '60%': { transform: 'translate(-50%, -50%)' },
            '80%': { transform: 'translate(-50%, -40%)' },
            '100%': { transform: 'translate(-50%, -40%)' },
          }
      },
  },
  plugins: [],
  }
}