import React from 'react';

import Content from './Content';
import Banner from './Banner';
import Logo from './Logo';

const Header = () => (
  <Banner>
    <Content>
      <Logo />
    </Content>
  </Banner>
);

export default Header;
