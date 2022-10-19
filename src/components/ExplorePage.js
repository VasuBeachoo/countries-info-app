import styled from "styled-components";
import RegionFilter from "./RegionFilter";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";

export const ExploreCountriesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;

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

const ExplorePage = ({ className, countries }) => {
  const displayCountries = (countries) => {
    let key = 2000;

    return countries.map((country) => (
      <CountryCard
        key={key++}
        flag={country.flags.svg}
        name={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    ));
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
