/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        tickMove: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        secondsAnime: "tickMove 60s linear infinite",
        minutesAnime: "tickMove 3600s linear infinite",
        hoursAnime: "tickMove 86400s linear inifinte",
      },
    },
  },
  plugins: [],
};
