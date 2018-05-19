import styled from 'styled-components';
import { transparentize } from 'polished';

const Description = styled.span`
  color: ${props => transparentize(0.5, props.theme.primary)};
  margin-right: 0.4rem;
  text-transform: uppercase;
`;

export default Description;
