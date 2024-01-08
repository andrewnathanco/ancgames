/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      colors: {
        sun: {
          50: "#fefae0",
          100: "#fff7c2",
          200: "#ffec89",
          300: "#ffd945",
          400: "#fdc412",
          500: "#edaa05",
          600: "#cc8202",
          700: "#a35b05",
          800: "#86480d",
          900: "#723b11",
          950: "#431d05",
        },
        manhattan: {
          50: "#fef6ee",
          100: "#fcebd8",
          200: "#f6c79c",
          300: "#f3b37e",
          400: "#ed8a4a",
          500: "#e86b27",
          600: "#da521c",
          700: "#b53e19",
          800: "#90321c",
          900: "#742c1a",
          950: "#3f130b",
        },
        "desert-sand": {
          50: "#fcf5f0",
          100: "#f7e9dd",
          200: "#ecc8af",
          300: "#e4ae8d",
          400: "#d8875f",
          500: "#cf6940",
          600: "#c15335",
          700: "#a0412e",
          800: "#81362b",
          900: "#682f26",
          950: "#381512",
        },
        wine: {
          50: "#f5f5f9",
          100: "#e8e8f1",
          200: "#d7d7e6",
          300: "#bbbbd5",
          400: "#9a9ac0",
          500: "#8682af",
          600: "#7770a0",
          700: "#6d6491",
          800: "#5d5578",
          900: "#48435c",
          950: "#322e3d",
        },
      },
    },
  },
  plugins: [],
};