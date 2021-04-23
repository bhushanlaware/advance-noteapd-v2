import {
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import Head from "next/head";
import BluePink from "@UI/themes/GreenYellow";
import { DarkModeContext } from "@UI/hooks/useDarkMode";
import * as React from "react";
function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(true);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          mode: "dark",
          ...BluePink,
          background: {
            paper: darkMode ? "#222b45" : "#ffff",
            default: darkMode ? "#1a2138" : "#f7f9fc",
          },
          text: {
            primary: darkMode ? "#eeeeef" : "#2d3748",
            secondary: darkMode ? "#aeb0b4" : "#646e73",
          },
        },
      }),
    [darkMode]
  );
  return (
    <ThemeProvider theme={theme}>
         <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <CssBaseline />
          <Component {...pageProps} />
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
