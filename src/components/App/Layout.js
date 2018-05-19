import styled from 'styled-components';

const Layout = styled.div`
  background-color: ${props => props.theme.background};
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  transition: background-color 0.45s linear;
`;

export default Layout;
