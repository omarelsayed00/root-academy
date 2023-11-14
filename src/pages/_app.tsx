import { Fragment, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Layout from "@layout/index";
// Redux
import { Provider } from "react-redux";
import { store } from "@redux/store";
// Styles

import { GlobaleStyle } from "@styles/globals";
import "../styles/styles.css";
import dynamic from "next/dynamic";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { AuthProvider } from "src/context/AuthContext";
import { useRouter } from "next/router";
import Loading from "@components/Loading";

function MyApp({
  Component,
  pageProps: { ...pageProps },
  ...appProps
}: AppProps) {
  const isLayoutNeeded =
    ![`/login`].includes(appProps.router.pathname) &&
    ![`/payment`].includes(appProps.router.pathname) &&
    ![`/orderCompleted`].includes(appProps.router.pathname) &&
    ![`/orderCompleted`].includes(appProps.router.pathname) &&
    ![`/verifyOTP`].includes(appProps.router.pathname);

  const LayoutComponent = isLayoutNeeded ? Layout : Fragment;
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <GlobaleStyle />
          <LayoutComponent>
            {isLoading && <Loading />}
            <Component {...pageProps} />
          </LayoutComponent>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

//export defaultMyApp;
export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
