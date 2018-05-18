import styled from 'styled-components';

import media from '../../styles/media';

const Temperatures = styled.div`
  margin-left: 2rem;
  margin-top: 0.4rem;

  ${media.tablet`
    margin: 0;
    display: flex;
    align-items: center;
    margin-left: auto;
  `};
`;

export default Temperatures;
