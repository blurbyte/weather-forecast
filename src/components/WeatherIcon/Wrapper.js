import styled from 'styled-components';

import media from '../../styles/media';

const Wrapper = styled.div`
  width: ${props => (props.small ? '5rem' : '11rem')};
  height: ${props => (props.small ? '5rem' : '11rem')};

  ${media.phone`
    width: ${props => props.small && '3.6rem'};
    height: ${props => props.small && '3.6rem'};
  `};
`;

export default Wrapper;
