/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Oswald", "sans-serif"],
      },
      colors: {
        ligthYellow: "#CDB587",
        ligthYellowText: "#5C472E",
        bgNavbar: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
