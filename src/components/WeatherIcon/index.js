import React from 'react';
import PropTypes from 'prop-types';

import { ClearSkyDay } from '../Icons';
import Wrapper from './Wrapper';

const WeatherIcon = ({ small }) => (
  <Wrapper small={small}>
    <ClearSkyDay />
  </Wrapper>
);

WeatherIcon.propTypes = {
  small: PropTypes.bool
};

export default WeatherIcon;
