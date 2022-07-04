import "../styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "../app/store";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
