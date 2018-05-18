import styled from 'styled-components';

import media from '../../styles/media';

const ListItem = styled.li`
  margin-top: 2rem;

  ${media.desktop`
    display: flex;
    flex-direction: column;
    align-items: center;
  `};

  ${media.tablet`
    margin-top: 0;
    flex-direction: row;
    padding: 0 2rem;
  `};
`;

export default ListItem;
