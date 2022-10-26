import styled from "styled-components";
import CountryInfoItem from "./CountryInfoItem";

export const BorderCountriesList = styled.div``;

export const BorderCountriesLabel = styled.h2``;

export const BorderCountriesBox = styled.div``;

export const ExtraInfoBox = styled.div``;

export const CountryName = styled.h1``;

export const MainInfoBox = styled.div``;

export const CountryFlag = styled.img``;

export const BackBtn = styled.button``;

export const CountryPageBox = styled.div``;

const CountryPage = ({ className, info }) => {
  const displayListNames = (list) => {
    let listNames = [];
    list.map((listItem) => listNames.push(listItem.name));
    return listNames.join(", ");
  };

  return (
    info && (
      <CountryPageBox className={className}>
        <BackBtn>Back</BackBtn>
        <CountryFlag src={info.flags.svg} alt={`${info.name} flag`} />
        <MainInfoBox>
          <CountryName>{info.name}</CountryName>
          <CountryInfoItem label="Native Name" value={info.nativeName} />
          <CountryInfoItem
            label="Population"
            value={info.population.toLocaleString()}
          />
          <CountryInfoItem label="Region" value={info.region} />
          <CountryInfoItem label="Sub Region" value={info.subregion} />
          <CountryInfoItem label="Capital" value={info.capital} />
        </MainInfoBox>
        <ExtraInfoBox>
          <CountryInfoItem
            label="Top Level Domain"
            value={info.topLevelDomain[0]}
          />
          <CountryInfoItem
            label="Currencies"
            value={displayListNames(info.currencies)}
          />
          <CountryInfoItem
            label="Languages"
            value={displayListNames(info.languages)}
          />
        </ExtraInfoBox>
        <BorderCountriesBox>
          <BorderCountriesLabel>Border Countries:</BorderCountriesLabel>
          <BorderCountriesList></BorderCountriesList>
        </BorderCountriesBox>
      </CountryPageBox>
    )
  );
};

export default CountryPage;
