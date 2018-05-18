import styled from 'styled-components';

import media from '../../styles/media';

const MainContent = styled.article`
  grid-area: main;
  padding-bottom: 6rem;

  ${media.phone`
    padding-bottom: 2rem;
  `};
`;

export default MainContent;
