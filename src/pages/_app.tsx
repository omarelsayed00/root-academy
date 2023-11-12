import { Fragment, useEffect } from "react";
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

  // Use the specified page layout or fallback to the default one.

  /* const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("RefreshToken")) {
      navigate("/login");
    }
  }, []); */

  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <GlobaleStyle />
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

//export defaultMyApp;
export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
