/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      keyframes: {
        moveRight: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(10px)', 
          },
        },
      },
      animation: {
        moveRight: 'moveRight 3s infinite',
      },
    },
  },
  plugins: [require("daisyui")],
};
