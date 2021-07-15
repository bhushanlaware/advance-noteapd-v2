import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import DynamicDrawer from "@UI/components/layouts/Drawer";
import TopBarLoader from "@UI/components/loaders/topBarLoader";
import "@UI/styles/global.css";
import AppThemeProvider from "./../client/themes";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { NavigationList } from "../client/routes/index";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

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
      <AppThemeProvider>
        {loading && <TopBarLoader />}
        {router.pathname.startsWith("/app") ? (
          <DynamicDrawer menu={NavigationList}>
            <Component {...pageProps} />
          </DynamicDrawer>
        ) : (
          <Component {...pageProps} />
        )}
      </AppThemeProvider>
    </>
  );
}
export default MyApp;
