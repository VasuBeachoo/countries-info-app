import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import ExplorePage from "./components/ExplorePage";
import { useState, useEffect } from "react";

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
`;

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const themes = {
    light: {
      bg: "var(--Light-Mode-Bg)",
      elements: "var(--Light-Mode-Elements)",
      text: "var(--Light-Mode-Text)",
      input: "var(--Light-Mode-Input)",
    },
    dark: {
      bg: "var(--Dark-Mode-Bg)",
      elements: "var(--Dark-Mode-Elements)",
      text: "var(--Dark-Mode-Text)",
      input: "var(--Dark-Mode-Input)",
    },
  };

  return (
    <ThemeProvider theme={themes.dark}>
      <AppBox>
        <GlobalStyle />
        <Header />
        <ExplorePage countries={countries} />
      </AppBox>
    </ThemeProvider>
  );
};

export default App;
