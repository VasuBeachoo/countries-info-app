import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import ExplorePage from "./components/ExplorePage";
import CountryPage from "./components/CountryPage";

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
  const [darkMode, setDarkMode] = useState(true);
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
    <ThemeProvider theme={darkMode ? themes.dark : themes.light}>
      <AppBox>
        <GlobalStyle />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <ExplorePage countries={countries} /> */}
        <CountryPage info={countries[20]} />
      </AppBox>
    </ThemeProvider>
  );
};

export default App;
