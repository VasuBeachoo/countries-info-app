import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";

export const HeaderTitle = styled.h2``;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
