import styled from "styled-components";

export const SearchBarInput = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country...",
})`
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};

  ::placeholder {
    color: ${(props) => props.theme.text};
  }
`;

export const SearchBarIcon = styled.img``;

export const SearchBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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
