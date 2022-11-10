import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RegionFilter from "./RegionFilter";
import SearchBar from "./SearchBar";
import CountryCard, { CountryCardBox } from "./CountryCard";

export const ExploreCountriesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
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
  align-items: stretch;
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
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("No Filter");

  const handleCountryCardClick = (countryCode) => {
    navigate(`/${countryCode}`);
    window.scrollTo(0, 0);
  };

  const filterCountries = (countries, searchInput, activeFilter) => {
    let resultCountries = countries;

    if (searchInput !== "")
      resultCountries = resultCountries.filter(
        (country) =>
          country.name.substr(0, searchInput.length).toUpperCase() ===
          searchInput.toUpperCase()
      );

    if (activeFilter !== "No Filter")
      resultCountries = resultCountries.filter(
        (country) => country.region === activeFilter
      );

    return resultCountries;
  };

  const displayCountries = (countries) => {
    let key = 2000;

    return filterCountries(countries, searchInput, activeFilter).map(
      (country) => (
        <CountryCard
          key={key++}
          flag={country.flags.svg}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          onClick={() => handleCountryCardClick(country.alpha3Code)}
        />
      )
    );
  };

  return (
    <ExplorePageBox className={className}>
      <ExploreFilterBox>
        <SearchBar
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <RegionFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </ExploreFilterBox>
      <ExploreCountriesBox>{displayCountries(countries)}</ExploreCountriesBox>
    </ExplorePageBox>
  );
};

export default ExplorePage;
