import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "styled-components/globalStyles";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function Application({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default Application;
