import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import ExplorePage from "./components/ExplorePage";
import { useEffect, useState } from "react";

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-width: 100vw;
  min-height: 100vh;
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

  return (
    <AppBox>
      <GlobalStyle />
      <Header />
      <ExplorePage countries={countries} />
    </AppBox>
  );
};

export default App;
