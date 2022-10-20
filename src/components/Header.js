import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";

export const HeaderTitle = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.025ch;
  margin: 0;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.925rem;
  user-select: none;
  background-color: ${(props) => props.theme.elements};
  padding: 1.75rem clamp(1.75rem, 5vw, 5rem);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = ({ className, darkMode, setDarkMode }) => {
  return (
    <HeaderBox className={className}>
      <HeaderTitle>Where in the world?</HeaderTitle>
      <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
    </HeaderBox>
  );
};

export default Header;
