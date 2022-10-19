import styled from "styled-components";
import CountryInfoItem from "./CountryInfoItem";

export const CountryName = styled.h2`
  color: ${(props) => props.theme.text};
  margin: 0 0 0.75rem 0;
`;

export const CountrySummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.65rem;
  padding-block: 2.5rem 3.25rem;
  padding-inline: clamp(1.5rem, 5vw, 2.5rem);
`;

export const CountryFlag = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: 15rem;
  border-radius: 0.75rem 0.75rem 0 0;
`;

export const CountryCardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 25rem;
  background-color: ${(props) => props.theme.elements};
  border-radius: 0.75rem;
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
