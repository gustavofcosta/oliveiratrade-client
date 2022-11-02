/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colors Default
        black_500: "#222",
        white: "#FFFF",
        textColor: "#1e293b",

        // Primary colors
        primary_100: "#fdecce",
        primary_200: "#fbd89d",
        primary_300: "#f9c56d",
        primary_400: "#f7b13c",
        primary_500: "#f59e0b",
        primary_600: "#c47e09",
        primary_700: "#935f07",
        primary_800: "#623f04",
        primary_900: "#312002",

        // Secondary colors
        secondary_100: "#ccdae8",
        secondary_200: "#99b4d1",
        secondary_300: "#668fba",
        secondary_400: "#3369a3",
        secondary_500: "#00448c",
        secondary_600: "#003670",
        secondary_700: "#002954",
        secondary_800: "#001b38",
        secondary_900: "#000e1c",

        // Alert colors
        colorRedLight: "#f8d7da",
        colorRedDark: "#842029",
        colorGreenLight: "#d1e7dd",
        colorGreenDark: "#0f5132",
      },
    },
  },
  plugins: [],
};
