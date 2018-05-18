import styled from 'styled-components';

import BaseContent from '../Content';

const Section = BaseContent.withComponent('section');

const Content = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
`;

export default Content;
