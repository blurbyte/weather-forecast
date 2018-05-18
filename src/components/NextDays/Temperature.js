import styled from 'styled-components';

import Text from '../Text';

const Temperature = styled(Text).attrs({
  big: true
})`
  line-height: 1.2;

  &:first-child {
    margin-right: 1rem;
  }
`;

export default Temperature;
