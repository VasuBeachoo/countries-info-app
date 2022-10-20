import styled, { css } from "styled-components";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export const ThemeLabel = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.025ch;
  margin: 0;
`;

export const SunIcon = styled(BsFillSunFill)`
  color: var(--Dark-Mode-Text);
`;

export const MoonIcon = styled(BsFillMoonFill)`
  color: var(--Light-Mode-Text);
`;

export const ThemeSwitcherBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.65rem;
  user-select: none;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    ${(props) =>
      props.darkMode
        ? css`
            filter: brightness(0.5);
          `
        : css`
            opacity: 0.45;
          `}
  }
`;

const ThemeSwitcher = ({ className, darkMode, setDarkMode }) => {
  return (
    <ThemeSwitcherBox
      className={className}
      darkMode={darkMode}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
      <ThemeLabel>{darkMode ? "Light Mode" : "Dark Mode"}</ThemeLabel>
    </ThemeSwitcherBox>
  );
};

export default ThemeSwitcher;
