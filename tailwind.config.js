/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",   // Teal color
        accent: "#fbbf24",    // Amber color
        background: "#f3f4f6" // Light gray background
      },
    },
  },
  plugins: [],
};

