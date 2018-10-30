import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#ffffff" }
  }
});

export default theme;
