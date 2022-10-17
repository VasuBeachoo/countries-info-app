import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Dark-Mode-Elements: hsl(209, 23%, 22%);
    --Dark-Mode-Bg: hsl(207, 26%, 17%);
    --Light-Mode-Text: hsl(200, 15%, 8%);
    --Light-Mode-Input: hsl(0, 0%, 52%);
    --Light-Mode-Bg: hsl(0, 0%, 98%);
    --Dark-Mode-Text: hsl(0, 0%, 100%);
    --Light-Mode-Elements: hsl(0, 0%, 100%);
  }

  * {
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
