module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        'custom':
          "0px 2px 4px 0px rgba(7, 4, 146, 0.10), 0px 24px 60px 0px rgba(6, 47, 125, 0.05), 0px 12px 24px 0px rgba(27, 59, 119, 0.05)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
