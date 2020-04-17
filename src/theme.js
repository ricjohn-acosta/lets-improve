import { createMuiTheme } from "@material-ui/core/styles";
import { responsiveFontSizes  } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

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
});

theme = responsiveFontSizes(theme)

export default theme;
