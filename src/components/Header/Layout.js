import styled from 'styled-components';

const Layout = styled.header`
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid ${props => props.theme.primary};
  grid-area: header;
`;

export default Layout;
