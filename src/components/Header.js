import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";

export const HeaderTitle = styled.h2`
  color: ${(props) => props.theme.text};
  font-weight: 800;
  margin: 0;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.elements};
  padding: 1.5rem clamp(1.75rem, 5vw, 5rem);
`;

const Header = ({ className }) => {
  return (
    <HeaderBox className={className}>
      <HeaderTitle>Where in the world?</HeaderTitle>
      <ThemeSwitcher />
    </HeaderBox>
  );
};

export default Header;
