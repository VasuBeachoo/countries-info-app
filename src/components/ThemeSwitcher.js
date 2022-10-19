import styled from "styled-components";

export const ThemeLabel = styled.h3`
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin: 0;
`;

export const ThemeIcon = styled.img``;

export const ThemeSwitcherBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ThemeSwitcher = ({ className }) => {
  return (
    <ThemeSwitcherBox className={className}>
      <ThemeIcon />
      <ThemeLabel>Dark Mode</ThemeLabel>
    </ThemeSwitcherBox>
  );
};

export default ThemeSwitcher;
