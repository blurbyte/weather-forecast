import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Icon from './Icon';

const WeatherIcon = ({ isDaytime = true, weatherId, small }) => (
  <Wrapper small={small}>
    <Icon isDaytime={isDaytime} weatherId={weatherId} />
  </Wrapper>
);

WeatherIcon.propTypes = {
  weatherId: PropTypes.number.isRequired,
  isDaytime: PropTypes.bool,
  small: PropTypes.bool
};

export default WeatherIcon;
