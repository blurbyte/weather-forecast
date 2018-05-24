import styled from 'styled-components';

import media from '../../styles/media';
import Text from '../Text';

const Temperature = styled(Text).attrs({
  big: true
})`
  line-height: 1.2;

  &:first-child {
    margin-right: 1rem;
  }

  ${media.tablet`
    width: 3rem;
    text-align: right;
  `};
`;

export default Temperature;
