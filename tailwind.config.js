/** @type {import('tailwindcss').Config} */
const typingAnimation = 'typing 4s steps(30) 1s forwards';
const blinkAnimation = 'blink 500ms step-end infinite alternate';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '10' },
        },
      },
      animation: {
        slideDown: 'slideDown 10s ease-in-out forwards',
        blink: 'blink 1s linear infinite',
      },
    },
  },
  plugins: [],
}