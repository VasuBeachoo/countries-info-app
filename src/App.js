import styled from "styled-components";
import ExplorePage from "./components/ExplorePage";
import Header from "./components/Header";

const AppBox = styled.div``;

const App = () => {
  return (
    <AppBox>
      <Header />
      <ExplorePage />
    </AppBox>
  );
};

export default App;
