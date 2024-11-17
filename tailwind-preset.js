const { plugin } = require("postcss");

module.exports = {
  theme: {
    extends: {
      color: {
        primary: "#1a73e8",
        secondary: "#ff9f43",
        accent: "#f8312f",
        white: "#ffffff",
        black: "#000000",
      },

      fontFamily: {
        sans: ["Helvetica Neue", "Arial"],
      },
    },
  },

  plugin: [],
};
