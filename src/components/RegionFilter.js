import { useState } from "react";
import styled, { css } from "styled-components";
import { BsChevronDown } from "react-icons/bs";

export const mixinRegionBox = css`
  gap: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 1.375rem 1.75rem;
`;

export const FilterOption = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1.05rem;
  letter-spacing: 0.025ch;
  margin: 0;
`;

export const FilterListBox = styled.div`
  ${mixinRegionBox}
  position: absolute;
  top: 4.75rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  background-color: ${(props) => props.theme.elements};

  ${FilterOption} {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const DropdownIcon = styled(BsChevronDown)`
  color: ${(props) => props.theme.text};
  ${(props) =>
    props.menuOpen &&
    css`
      transform: rotate(180deg);
    `};
`;

export const ActiveFilterBox = styled.div`
  ${mixinRegionBox}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.elements};

  &:hover {
    cursor: pointer;
  }
`;

export const RegionFilterBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  width: clamp(1rem, 100%, 20rem);
  user-select: none;
`;

const RegionFilter = ({ className, activeFilter, setActiveFilter }) => {
  const filterOptions = [
    "No Filter",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    setMenuOpen(false);
  };

  const displayFilterOptions = (filterOptions) => {
    let key = 1000;

    return filterOptions.map((option) => (
      <FilterOption key={key++} onClick={() => handleFilterSelect(option)}>
        {option}
      </FilterOption>
    ));
  };

  return (
    <RegionFilterBox className={className}>
      <ActiveFilterBox onClick={() => setMenuOpen(!menuOpen)}>
        <FilterOption>
          {activeFilter === "No Filter" ? "Filter by Region" : activeFilter}
        </FilterOption>
        <DropdownIcon menuOpen={menuOpen} />
      </ActiveFilterBox>
      {menuOpen && (
        <FilterListBox>{displayFilterOptions(filterOptions)}</FilterListBox>
      )}
    </RegionFilterBox>
  );
};

export default RegionFilter;
