module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.html"],
  theme: {
    fontFamily: {
      "sf-pro": ["sf-pro", "sans-serif"],
      sackers: ["sackers", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
