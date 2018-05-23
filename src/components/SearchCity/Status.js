// Small dropdown below input

import styled from 'styled-components';
import List from './List';

const Base = List.withComponent('div');

const Status = styled(Base)`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 1.4rem;
  font-style: italic;
  color: rgba(34, 34, 34, 0.5);
`;

export default Status;
