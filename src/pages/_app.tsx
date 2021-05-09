import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import DynamicDrawer from "@UI/components/layouts/Drawer";
import TopBarLoader from "@UI/components/loaders/topBarLoader";
import { DarkModeContext } from "@UI/hooks/useDarkMode";
import "@UI/styles/global.css";
import BluePink from "@UI/themes/GreenYellow";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { NavigationList } from "../client/routes/index";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    const LocalValue = localStorage.getItem("darkMode");
    if (!LocalValue) {
      localStorage.setItem("darkMode", "true");
      setDarkMode(true);
    } else {
      setTimeout(() => {
        setDarkMode(JSON.parse(LocalValue));
      }, 1);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

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
    [darkMode, BluePink]
  );

  React.useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="manifest.json" />
          {/* <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta> */}
        </Head>
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <CssBaseline />
          {loading && <TopBarLoader />}
          {router.pathname.startsWith("/app") ? (
            <DynamicDrawer menu={NavigationList}>
              <Component {...pageProps} />
            </DynamicDrawer>
          ) : (
            <Component {...pageProps} />
          )}
        </DarkModeContext.Provider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
