import styled from 'styled-components';

import media from '../../styles/media';

const List = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid ${props => props.theme.primary};

  ${media.tablet`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  `};
`;

export default List;
