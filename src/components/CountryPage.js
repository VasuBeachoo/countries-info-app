import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CountryInfoItem from "./CountryInfoItem";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export const BorderCountryBtn = styled.button`
  all: unset;
  text-align: center;
  user-select: none;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  font-size: 0.95rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 0.75rem 2rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    filter: brightness(1.5);
  }
`;

export const BorderCountriesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const BorderCountriesLabel = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 2.35ch;
  margin: 0;
`;

export const BorderCountriesBox = styled.div`
  grid-area: 3 / 1 / span 1 / span 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.75rem;
`;

export const ExtraInfoBox = styled.div`
  grid-area: 2 / 2 / span 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const MainInfoBox = styled.div`
  grid-area: 2 / 1 / span 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const CountryName = styled.h1`
  grid-area: 1 / 1 / span 1 / span 2;
  color: ${(props) => props.theme.text};
  font-size: 1.95rem;
  letter-spacing: 0.01ch;
  margin: 0;
`;

export const InfoItemsBox = styled.div`
  display: grid;
  grid-template: repeat(3, auto) / repeat(2, auto);
  gap: 1.75rem 5rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const CountryFlag = styled.img`
  width: 100%;
  max-width: 35rem;
`;

export const CountryInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3.5rem;
  }
`;

export const BackBtnLabel = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05ch;
  margin: 0;
`;

export const BackBtnIcon = styled(HiOutlineArrowNarrowLeft)`
  color: ${(props) => props.theme.text};
  font-size: 1.8rem;
`;

export const BackBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  user-select: none;
  background-color: ${(props) => props.theme.elements};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 0.75rem 2.5rem 0.75rem 1.75rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    filter: brightness(1.5);
  }
`;

export const CountryPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4rem;
  padding: 4rem clamp(1.75rem, 5vw, 5rem);
`;

const CountryPage = ({ className, info }) => {
  const navigate = useNavigate();
  const countries = require("i18n-iso-countries");
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

  const displayListNames = (list) => {
    let listNames = [];
    list.map((listItem) => listNames.push(listItem.name));
    return listNames.join(", ");
  };

  const displayBorderCountryName = (borderCountryCode) => {
    const borderCountryName = countries.getName(borderCountryCode, "en", {
      select: "alias",
    });

    if (borderCountryName !== undefined) return borderCountryName;
    else return borderCountryCode;
  };

  const handleBorderCountryBtnClick = (borderCountryCode) => {
    navigate(`/${borderCountryCode}`);
    window.scrollTo(0, 0);
  };

  let key = 8000;

  return (
    info && (
      <CountryPageBox className={className}>
        <BackBtn onClick={() => navigate(-1)}>
          <BackBtnIcon />
          <BackBtnLabel>Back</BackBtnLabel>
        </BackBtn>
        <CountryInfoBox>
          {info.flags.svg && info.name && (
            <CountryFlag src={info.flags.svg} alt={`${info.name} flag`} />
          )}
          <InfoItemsBox>
            {info.name && <CountryName>{info.name}</CountryName>}
            <MainInfoBox>
              {info.nativeName && (
                <CountryInfoItem label="Native Name" value={info.nativeName} />
              )}
              {info.population && (
                <CountryInfoItem
                  label="Population"
                  value={info.population.toLocaleString()}
                />
              )}
              {info.region && (
                <CountryInfoItem label="Region" value={info.region} />
              )}
              {info.subregion && (
                <CountryInfoItem label="Sub Region" value={info.subregion} />
              )}
              {info.capital && (
                <CountryInfoItem label="Capital" value={info.capital} />
              )}
            </MainInfoBox>
            <ExtraInfoBox>
              {info.topLevelDomain && (
                <CountryInfoItem
                  label="Top Level Domain"
                  value={info.topLevelDomain[0]}
                />
              )}
              {info.currencies && (
                <CountryInfoItem
                  label="Currencies"
                  value={displayListNames(info.currencies)}
                />
              )}
              {info.languages && (
                <CountryInfoItem
                  label="Languages"
                  value={displayListNames(info.languages)}
                />
              )}
            </ExtraInfoBox>
            {info.borders && (
              <BorderCountriesBox>
                <BorderCountriesLabel>Border Countries:</BorderCountriesLabel>
                <BorderCountriesList>
                  {info.borders.map((borderCountryCode) => (
                    <BorderCountryBtn
                      key={key++}
                      onClick={() =>
                        handleBorderCountryBtnClick(borderCountryCode)
                      }
                    >
                      {displayBorderCountryName(borderCountryCode)}
                    </BorderCountryBtn>
                  ))}
                </BorderCountriesList>
              </BorderCountriesBox>
            )}
          </InfoItemsBox>
        </CountryInfoBox>
      </CountryPageBox>
    )
  );
};

export default CountryPage;
