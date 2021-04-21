// import App from "next/app";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import BluePink from "@UI/themes/BluePink";
import Appbar from "@UI/components/landingPage/Appbar";
import * as React from "react";
function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(true);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
          ...BluePink,
        },
      }),
    [darkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar></Appbar>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
