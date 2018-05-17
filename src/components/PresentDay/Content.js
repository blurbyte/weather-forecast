import styled from 'styled-components';

import BaseContent from '../Content';

const Section = BaseContent.withComponent('section');

const Content = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  border-bottom: 1px solid #222222;
`;

export default Content;
