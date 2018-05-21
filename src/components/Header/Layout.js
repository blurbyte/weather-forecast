import styled from 'styled-components';

import { simpleFadeIn } from '../../styles/animations';

const Layout = styled.header`
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid ${props => props.theme.primary};
  grid-area: header;
  animation: ${simpleFadeIn} 1.6s ease-out forwards;
  opacity: 0;
  animation-delay: 0.2s;
  z-index: 9;
`;

export default Layout;
