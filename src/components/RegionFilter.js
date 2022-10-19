import styled from "styled-components";

export const FilterListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => props.theme.elements};
`;

export const FilterIcon = styled.img``;

export const FilterOption = styled.p`
  color: ${(props) => props.theme.text};
`;

export const ActiveFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.elements};
`;

export const RegionFilterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const RegionFilter = ({ className }) => {
  const filterOptions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const displayFilterOptions = (filterOptions) => {
    let key = 1000;

    return filterOptions.map((option) => (
      <FilterOption key={key++}>{option}</FilterOption>
    ));
  };

  return (
    <RegionFilterBox className={className}>
      <ActiveFilterBox>
        <FilterOption>Filter by Region</FilterOption>
        <FilterIcon />
      </ActiveFilterBox>
      <FilterListBox>{displayFilterOptions(filterOptions)}</FilterListBox>
    </RegionFilterBox>
  );
};

export default RegionFilter;
