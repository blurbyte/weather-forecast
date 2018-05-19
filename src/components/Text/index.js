import styled from 'styled-components';
import { transparentize } from 'polished';

const Text = styled.p`
  font-size: ${props => (props.big ? '1.8rem' : '1.4rem')};
  color: ${props => (props.dimmed ? transparentize(0.5, props.theme.primary) : props.theme.primary)};
  margin: 0;
  text-transform: ${props => (props.big ? 'uppercase' : 'none')};
`;

export default Text;
