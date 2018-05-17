import styled from 'styled-components';

import BaseText from '../Text';

const InfoText = styled(BaseText)`
  margin: 0.2rem 2rem 0.2rem 0;
  text-transform: none;

  &:last-child {
    margin-right: 0;
  }
`;

export default InfoText;
