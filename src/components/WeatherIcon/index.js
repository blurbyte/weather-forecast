import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Icon from './Icon';

const WeatherIcon = ({ weatherId, small }) => (
  <Wrapper small={small}>
    <Icon weatherId={weatherId} />
  </Wrapper>
);

WeatherIcon.propTypes = {
  weatherId: PropTypes.number.isRequired,
  small: PropTypes.bool
};

export default WeatherIcon;
