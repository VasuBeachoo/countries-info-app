import styled from "styled-components";

export const FilterListBox = styled.div``;

export const FilterIcon = styled.img``;

export const FilterOption = styled.p``;

export const ActiveFilterBox = styled.div``;

export const RegionFilterBox = styled.div``;

const RegionFilter = ({ className }) => {
  const filterOptions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const displayFilterOptions = (filterOptions) => {
    return filterOptions.map((option) => <FilterOption>{option}</FilterOption>);
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
