import styled from "styled-components";
import CountryInfoItem from "./CountryInfoItem";

export const CountryName = styled.h2``;

export const CountrySummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CountryFlag = styled.img``;

export const CountryCardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const CountryCard = ({
  className,
  flag,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <CountryCardBox className={className}>
      <CountryFlag src={flag} alt={`${name} flag`} />
      <CountrySummaryBox>
        <CountryName>{name}</CountryName>
        <CountryInfoItem
          label="Population"
          value={population.toLocaleString()}
        />
        <CountryInfoItem label="Region" value={region} />
        <CountryInfoItem label="Capital" value={capital} />
      </CountrySummaryBox>
    </CountryCardBox>
  );
};

export default CountryCard;
