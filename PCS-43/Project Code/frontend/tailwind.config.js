/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#E7F0FC",
        mediumYellow: "#F9E600",
        linkBlue: "#032656",
        littleBlack: "#090909",
        mediumBlue: "#2A2D4F",
        headingBg: "#E0EBF9",
        sectionColor: "#F9F8FF",
      },
      
    },
  },
  plugins: [],
};
