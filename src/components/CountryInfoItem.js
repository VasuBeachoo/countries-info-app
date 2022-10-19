import styled from "styled-components";

export const CountryInfoLabel = styled.span``;

export const CountryInfoItemText = styled.p`
  color: ${(props) => props.theme.text};
`;

const CountryInfoItem = ({ className, label, value }) => {
  return (
    <CountryInfoItemText className={className}>
      <CountryInfoLabel>{label}</CountryInfoLabel>: {value}
    </CountryInfoItemText>
  );
};

export default CountryInfoItem;
