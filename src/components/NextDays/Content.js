import styled from 'styled-components';

import media from '../../styles/media';
import { fadeIn } from '../../styles/animations';
import BaseContent from '../Content';

const Section = BaseContent.withComponent('section');

const Content = styled(Section)`
  animation: ${fadeIn} 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: 0.45s;

  ${media.desktop`
    padding: 0;
  `};
`;

export default Content;
