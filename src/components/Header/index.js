import React from 'react';

import Content from './Content';
import Layout from './Layout';
import Logo from './Logo';

const Header = () => (
  <Layout>
    <Content>
      <Logo />
    </Content>
  </Layout>
);

export default Header;
