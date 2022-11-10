import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchBarInput = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country...",
})`
  all: unset;
  width: 100%;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  font-size: 1.05rem;
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

export const SearchBarIcon = styled(BsSearch)`
  position: absolute;
  left: 1.2rem;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
`;

export const SearchBarBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: clamp(10rem, 100%, 25rem);
`;

const SearchBar = ({ className, value, onChange }) => {
  return (
    <SearchBarBox className={className}>
      <SearchBarIcon />
      <SearchBarInput value={value} onChange={onChange} />
    </SearchBarBox>
  );
};

export default SearchBar;
