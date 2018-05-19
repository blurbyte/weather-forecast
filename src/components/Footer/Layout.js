import styled from 'styled-components';
import { transparentize } from 'polished';

const Wrapper = styled.footer`
  height: 6rem;
  border-top: 1px solid ${props => transparentize(0.5, props.theme.primary)};
  grid-area: footer;
`;

export default Wrapper;
