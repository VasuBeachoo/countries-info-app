import styled from "styled-components";
import RegionFilter from "./RegionFilter";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";

export const ExploreCountriesBox = styled.div``;

export const ExploreFilterBox = styled.div``;

export const ExplorePageBox = styled.div``;

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
