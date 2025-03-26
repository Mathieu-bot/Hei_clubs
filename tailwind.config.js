/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        growWidth: {
          "0%": { opacity: 0, width: "0%" },
          "100%": { opacity: 1, width: "100%" },
        },
      },
      animation: {
        growWidth: "growWidth 1s ease-in-out forwards",
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
      backgroundImage: {
        'special': "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(223, 164, 31, 0.3)), url('Assets/images/bgbanner.jpeg')"
      },
      colors: {
        primary: {
          50: "#E5E9F5",
          100: "#C2CBE6",
          200: "#9BA8D6",
          300: "#6F81C1",
          400: "#3D55A3",
          500: "#001948",
          600: "#00153D",
          700: "#000F2E",
          800: "#000A1F",
          900: "#000512",
        },
        secondary: {
          50: "#FFF8E5",
          100: "#FCEFC2",
          200: "#F9E39A",
          300: "#F5D36F",
          400: "#F1BD3D",
          500: "#DFA408",
          600: "#B88207",
          700: "#946306",
          800: "#6F4704",
          900: "#4A2F02",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
