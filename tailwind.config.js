const colors = {
  primary: "#35B091",
  secondary: "#F8F8F8",
  white: "white",
};
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.primary,
      secondary: colors.secondary,
      white: colors.white,
    },
    extend: {
      outline: {
        primary: `1px solid ${colors.primary}`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
