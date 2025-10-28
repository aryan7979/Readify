/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "base-100": "#ffffff", // ensures light background is white
          "base-content": "#000000" // ensures text is black
        },
        dark: "dark", // dark theme from DaisyUI
      },
    ],
  },
};
