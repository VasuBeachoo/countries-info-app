import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import ExplorePage from "./components/ExplorePage";

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppBox>
      <GlobalStyle />
      <Header />
      <ExplorePage />
    </AppBox>
  );
};

export default App;
