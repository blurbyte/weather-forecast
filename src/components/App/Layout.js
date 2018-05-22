import styled from 'styled-components';

import { simpleFadeIn } from '../../styles/animations';

const Layout = styled.div`
  background-color: ${props => props.theme.background};
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  animation: ${simpleFadeIn} 0.35s ease-out forwards;
`;

export default Layout;
