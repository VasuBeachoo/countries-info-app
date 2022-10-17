import styled from "styled-components";
import CountryInfoItem from "./CountryInfoItem";

export const CountryName = styled.h2``;

export const CountrySummaryBox = styled.div``;

export const CountryFlag = styled.img``;

export const CountryCardBox = styled.div``;

const CountryCard = ({ className, name, population, region, capital }) => {
  return (
    <CountryCardBox className={className}>
      <CountryFlag />
      <CountrySummaryBox>
        <CountryName>{name}</CountryName>
        <CountryInfoItem label="Population" value={population} />
        <CountryInfoItem label="Region" value={region} />
        <CountryInfoItem label="Capital" value={capital} />
      </CountrySummaryBox>
    </CountryCardBox>
  );
};

export default CountryCard;
