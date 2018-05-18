import styled from 'styled-components';

import media from '../../styles/media';
import BaseContent from '../Content';

const Section = BaseContent.withComponent('section');

const Content = styled(Section)`
  ${media.desktop`
    padding: 0;
  `};
`;

export default Content;
