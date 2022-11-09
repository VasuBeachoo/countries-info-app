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
  user-select: none;
  background-color: ${(props) => props.theme.elements};
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    transform: scale(0.925);
  }
`;

const CountryCard = ({
  className,
  flag,
  name,
  population,
  region,
  capital,
  onClick,
}) => {
  return (
    <CountryCardBox className={className} onClick={onClick}>
      <CountryFlag src={flag} alt={`${name} flag`} />
      <CountrySummaryBox>
        <CountryName>{name}</CountryName>
        {population && (
          <CountryInfoItem
            label="Population"
            value={population.toLocaleString()}
          />
        )}
        {region && <CountryInfoItem label="Region" value={region} />}
        {capital && <CountryInfoItem label="Capital" value={capital} />}
      </CountrySummaryBox>
    </CountryCardBox>
  );
};

export default CountryCard;
