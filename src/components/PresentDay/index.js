import React from 'react';

import Text from '../Text';
import Content from './Content';
import CityName from './CityName';
import MainInfo from './MainInfo';
import Weekday from './Weekday';
import SunInfo from './SunInfo';
import AirInfo from './AirInfo';

const PresentDay = () => (
  <Content>
    <CityName>London</CityName>
    <Text big>Clear sky</Text>
    <MainInfo />
    <Weekday />
    <SunInfo />
    <AirInfo />
  </Content>
);

export default PresentDay;
