import styled from 'styled-components';

import { simpleFadeIn } from '../../styles/animations';

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  animation: ${simpleFadeIn} 0.15s ease-out forwards;
  opacity: 0;
`;

export default Wrapper;
