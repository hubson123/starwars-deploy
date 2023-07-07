import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-image: url("https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg");
    background-size: cover;
    color: yellow;
    text-align: center;
  }
`;

export default GlobalStyle;
