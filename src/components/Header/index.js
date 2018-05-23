import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from '../Icons';
import SearchCity from '../SearchCity';
import SearchCityOverlay from '../SearchCityOverlay';
import Content from './Content';
import Layout from './Layout';

const Header = ({ fetchForecast }) => (
  <Layout>
    <Content>
      <Logo />
      <SearchCityOverlay fetchForecast={fetchForecast} />
      <SearchCity fetchForecast={fetchForecast} />
    </Content>
  </Layout>
);

Header.propTypes = {
  fetchForecast: PropTypes.func
};

export default Header;
