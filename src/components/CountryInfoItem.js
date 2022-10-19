import styled from "styled-components";

export const CountryInfoValue = styled.span`
  font-weight: 400;
  opacity: 0.75;
`;

export const CountryInfoLabel = styled.span`
  font-weight: 600;
`;

export const CountryInfoItemText = styled.p`
  color: ${(props) => props.theme.text};
  margin: 0;
`;

const CountryInfoItem = ({ className, label, value }) => {
  return (
    <CountryInfoItemText className={className}>
      <CountryInfoLabel>{label}:</CountryInfoLabel>{" "}
      <CountryInfoValue>{value}</CountryInfoValue>
    </CountryInfoItemText>
  );
};

export default CountryInfoItem;
