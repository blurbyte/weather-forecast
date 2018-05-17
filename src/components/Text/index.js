import styled from 'styled-components';

const Text = styled.p`
  font-size: ${props => (props.big ? '1.8rem' : '1.4rem')};
  color: #222222;
  margin: 0;
  text-transform: uppercase;
`;

export default Text;
