import React from 'react';

import Input from '../Input';
import Content from './Content';
import Layout from './Layout';
import Logo from './Logo';

const Header = () => (
  <Layout>
    <Content>
      <Logo />
      <Input placeholder="Your city name" />
    </Content>
  </Layout>
);

export default Header;
