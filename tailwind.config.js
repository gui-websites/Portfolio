const defaultTheme = require("tailwindcss/defaultTheme");
// const css = (name) => (opacity) => `rgba(var(--${name}), ${opacity})`;
const css = (name) => `var(--${name})`;

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jetbrains Mono", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        white: css("white"),
        gray: css("gray"),
        black: css("black"),

        background: css("bg-black"),
      },
    },
  },
  plugins: [],
};
