import React from 'react';
import PropTypes from 'prop-types';

import Search from '../Search';
import Content from './Content';
import Layout from './Layout';
import Logo from './Logo';

const Header = ({ fetchForecast }) => (
  <Layout>
    <Content>
      <Logo />
      <Search fetchForecast={fetchForecast} />
    </Content>
  </Layout>
);

Header.propTypes = {
  fetchForecast: PropTypes.func
};

export default Header;
