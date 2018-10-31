import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: { main: "#212121" },
    secondary: { main: "#F5F5F5" },
    type: "dark"
  }
});

export default theme;
