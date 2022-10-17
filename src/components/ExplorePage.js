import styled from "styled-components";
import RegionFilter from "./RegionFilter";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";

export const ExploreCountriesBox = styled.div``;

export const ExploreFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ExplorePageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const ExplorePage = ({ className }) => {
  const countries = [];

  const displayCountries = (countries) => {
    return countries.map((country) => <CountryCard />);
  };

  return (
    <ExplorePageBox className={className}>
      <ExploreFilterBox>
        <SearchBar />
        <RegionFilter />
      </ExploreFilterBox>
      <ExploreCountriesBox>{displayCountries(countries)}</ExploreCountriesBox>
    </ExplorePageBox>
  );
};

export default ExplorePage;
