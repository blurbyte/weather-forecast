import React from 'react';
import PropTypes from 'prop-types';

import isDaytime from '../../utils/isDaytime';
import Text from '../Text';
import Content from './Content';
import CityName from './CityName';
import MainInfo from './MainInfo';
import Weekday from './Weekday';
import SunInfo from './SunInfo';
import AirInfo from './AirInfo';

const PresentDay = ({ name, description, temp, sunrise, sunset, humidity, wind, pressure, weatherId }) => (
  <Content>
    <CityName>{name}</CityName>
    <Text big>{description}</Text>
    <MainInfo temp={temp} weatherId={weatherId} isDaytime={isDaytime(sunrise * 1000, sunset * 1000, Date.now())} />
    <Weekday timestamp={Date.now()} />
    <SunInfo sunrise={sunrise} sunset={sunset} />
    <AirInfo wind={wind} humidity={humidity} pressure={pressure} />
  </Content>
);

PresentDay.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  weatherId: PropTypes.number.isRequired
};

export default PresentDay;
