/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./reused/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xl': {'max': '1279px'},
      'lg': {'max': '1120px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    }
  },
  darkMode: "class",
};