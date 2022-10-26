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
      "blue-50": "#EFF6FF",
      "blue-100": "#DBEAFE",
      "blue-200": "#BFDBFE",
      "blue-300": "#93C5FD",
      "blue-400": "#60A5FA",
      "blue-500": "#3B82F6",
      "blue-600": "#2563EB",
      "blue-700": "#1D4ED8",
      "blue-800": "#1E40AF",
      "blue-900": "#1E3A8A",
      "grey-50": "#F9FAFB",
      "grey-100": "#F3F4F6",
      "grey-200": "#E5E7EB",
      "grey-300": "#D1D5DB",
      "grey-400": "#9CA3AF",
      "grey-500": "#6B7280",
      "grey-600": "#4B5563",
      "grey-700": "#374151",
      "grey-800": "#1F2937",
      "grey-900": "#111827",
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
