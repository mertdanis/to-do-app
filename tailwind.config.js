/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["font-mono"],
    },
    extend: {
      colors: {
        body__background: "var(--body__background)",
        app__background: "var(--app__background)",
        text__color: "var(--text__color)",
      },
    },
  },
  plugins: [],
};
