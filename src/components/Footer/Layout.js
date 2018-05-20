import styled from 'styled-components';
import { transparentize } from 'polished';

import { simpleFadeIn } from '../../styles/animations';

const Wrapper = styled.footer`
  height: 6rem;
  border-top: 1px solid ${props => transparentize(0.5, props.theme.primary)};
  grid-area: footer;
  animation: ${simpleFadeIn} 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: 0.6s;
`;

export default Wrapper;
