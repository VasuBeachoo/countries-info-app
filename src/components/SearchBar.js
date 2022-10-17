import styled from "styled-components";

export const SearchBarInput = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country...",
})``;

export const SearchBarIcon = styled.img``;

export const SearchBarBox = styled.div``;

const SearchBar = ({ className }) => {
  return (
    <SearchBarBox className={className}>
      <SearchBarIcon />
      <SearchBarInput />
    </SearchBarBox>
  );
};

export default SearchBar;
