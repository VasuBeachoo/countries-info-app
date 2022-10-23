import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const SearchBarInput = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country...",
})`
  all: unset;
  width: 100%;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  letter-spacing: 0.025ch;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 1.3rem 2rem 1.3rem 3.5rem;

  ::placeholder {
    color: ${(props) => props.theme.text};
    opacity: 0.45;
  }
`;

export const SearchBarIcon = styled(HiMagnifyingGlass)`
  position: absolute;
  left: 1.125rem;
  color: ${(props) => props.theme.text};
  font-size: 1.4rem;
`;

export const SearchBarBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: clamp(10rem, 100%, 20rem);
`;

const SearchBar = ({ className }) => {
  return (
    <SearchBarBox className={className}>
      <SearchBarIcon />
      <SearchBarInput />
    </SearchBarBox>
  );
};

export default SearchBar;
