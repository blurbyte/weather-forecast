import styled from 'styled-components';

const CityName = styled.h1`
  color: ${props => props.theme.primary};
  font-family: 'Cardo', serif;
  line-height: 1;
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: 2px;
  margin: 0;
`;

export default CityName;
