import styled from 'styled-components';

import BaseContent from '../Content';

const Content = styled(BaseContent)`
  color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export default Content;
