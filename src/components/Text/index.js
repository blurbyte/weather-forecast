import styled from 'styled-components';

const Text = styled.p`
  font-size: ${props => (props.big ? '1.8rem' : '1.4rem')};
  color: ${props => (props.dimmed ? 'rgba(34, 34, 34, 0.5)' : '#222222')};
  margin: 0;
  text-transform: ${props => (props.big ? 'uppercase' : 'none')};
`;

export default Text;
