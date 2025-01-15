/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Noto Sans Khmer", " serif"],
      },
      animation: {
        "ball-bounce": "ball-bounce 0.6s infinite", // Faster bounce
      },
      keyframes: {
        "ball-bounce": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: " scale(1.1)" },
        },
      },
    
    },
  },
  plugins: [],
};
