/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.twig", "./templates/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Fraunces"', "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
