import styled from "styled-components";
import CountryInfoItem from "./CountryInfoItem";

export const BorderCountriesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const BorderCountriesLabel = styled.h2``;

export const BorderCountriesBox = styled.div`
  grid-area: 3 / 1 / span 1 / span 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ExtraInfoBox = styled.div`
  grid-area: 2 / 2 / span 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MainInfoBox = styled.div`
  grid-area: 2 / 1 / span 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CountryName = styled.h1`
  grid-area: 1 / 1 / span 1 / span 2;
`;

export const InfoItemsBox = styled.div`
  display: grid;
  grid-template: repeat(3, auto) / repeat(2, auto);
`;

export const CountryFlag = styled.img`
  width: 100%;
  max-width: 40rem;
`;

export const CountryInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const BackBtn = styled.button``;

export const CountryPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

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
        <CountryInfoBox>
          <CountryFlag src={info.flags.svg} alt={`${info.name} flag`} />
          <InfoItemsBox>
            <CountryName>{info.name}</CountryName>
            <MainInfoBox>
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
          </InfoItemsBox>
        </CountryInfoBox>
      </CountryPageBox>
    )
  );
};

export default CountryPage;
