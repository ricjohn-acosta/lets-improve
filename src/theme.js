import { createMuiTheme } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Open Sans",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280, // old 1280
      xl: 1534, // old 1920
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
