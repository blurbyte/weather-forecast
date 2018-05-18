import styled from 'styled-components';

import media from '../../styles/media';

const Info = styled.div`
  display: flex;
  margin: 0.4rem 0;

  ${media.tablet`
    margin-left: auto;
    width: calc(50% + 1.8rem);
  `};
`;

export default Info;
