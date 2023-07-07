import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "styled-components/globalStyles";
import "../styles/globals.css";

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
