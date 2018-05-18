import React from 'react';

import Text from '../Text';
import Content from './Content';
import Layout from './Layout';

const Footer = () => (
  <Layout>
    <Content>
      <Text dimmed>Data from OpenWeatherMap</Text>
    </Content>
  </Layout>
);

export default Footer;
