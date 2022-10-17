import styled from "styled-components";

export const ThemeLabel = styled.h3``;

export const ThemeIcon = styled.img``;

export const ThemeSwitcherBox = styled.div``;

const ThemeSwitcher = ({ className }) => {
  return (
    <ThemeSwitcherBox className={className}>
      <ThemeIcon />
      <ThemeLabel>Dark Mode</ThemeLabel>
    </ThemeSwitcherBox>
  );
};

export default ThemeSwitcher;
