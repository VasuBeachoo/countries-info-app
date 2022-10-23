import styled from "styled-components";
import RegionFilter from "./RegionFilter";
import SearchBar from "./SearchBar";
import CountryCard, { CountryCardBox } from "./CountryCard";

export const ExploreCountriesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;

  ${CountryCardBox} {
    width: 100%;
  }
`;

export const ExploreFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ExplorePageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 2.5rem;
  padding: 2.5rem clamp(1.75rem, 5vw, 5rem);
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
