/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ball-bounce": "ball-bounce 0.6s infinite", // Faster bounce
      },
      keyframes: {
        "ball-bounce": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: " scale(1.1)" },
        },
      },
      screens: {
        maxsm: { max: "639px" }, // Max-width: 639px
        maxmd: { max: "767px" }, // Max-width: 767px
        maxlg: { max: "1023px" }, // Max-width: 1023px
        maxxl: { max: "1279px" }, // Max-width: 1279px
        max2xl: { max: "1535px" }, // Max-width: 1535px
      },
    },
  },
  plugins: [],
};
