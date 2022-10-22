/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      slate: "#1f2421",
      whitesmoke: "#dce1de",
      "dark-green": "#216869",
      green: "#49A078",
      "light-green": "#9cc5A1",
      "light-grey": "#F5F5F5",
      "purple-50": "#FAF5FF",
      "purple-100": "#F3E8FF",
      "purple-200": "#E9D5FF",
      "purple-300": "#D8B4FE",
      "purple-400": "#C084FC",
      "purple-500": "#A855F7",
      "purple-600": "#9333EA",
      "purple-700": "#7E22CE",
      "purple-800": "#6B21A8",
      "purple-900": "#581C87",
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
