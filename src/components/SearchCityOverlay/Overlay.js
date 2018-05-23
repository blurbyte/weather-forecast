import styled from 'styled-components';

import media from '../../styles/media';
import BaseOverlay from '../Overlay';

const Overlay = styled(BaseOverlay)`
  display: none;

  ${media.tablet`
    display: block;
  `};
`;

export default Overlay;
