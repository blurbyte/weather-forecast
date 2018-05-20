import React from 'react';

import Search from '../Search';
import Content from './Content';
import Layout from './Layout';
import Logo from './Logo';

const Header = () => (
  <Layout>
    <Content>
      <Logo />
      <Search />
    </Content>
  </Layout>
);

export default Header;
