import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => (props.small ? '5rem' : '11rem')};
  height: ${props => (props.small ? '5rem' : '11rem')};
`;

export default Wrapper;
