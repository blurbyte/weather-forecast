// Renders appropriate weather conditions icon based on provided weather id

import React from 'react';
import PropTypes from 'prop-types';

import {
  BrokenClouds,
  ClearSkyDay,
  ClearSkyNight,
  FewCloudsDay,
  FewCloudsNight,
  Mist,
  RainDay,
  RainNight,
  ScatteredClouds,
  ShowerRain,
  Snow,
  Thunderstorm
} from '../Icons';

const Icon = ({ isDaytime, weatherId }) => {
  if (weatherId >= 200 && weatherId < 300) {
    return <Thunderstorm />;
  } else if (weatherId >= 300 && weatherId < 400) {
    return <ShowerRain />;
  } else if (weatherId >= 500 && weatherId < 600) {
    if (isDaytime) {
      return <RainDay />;
    }
    return <RainNight />;
  } else if (weatherId >= 600 && weatherId < 700) {
    return <Snow />;
  } else if (weatherId >= 700 && weatherId < 800) {
    return <Mist />;
  } else if (weatherId === 801) {
    if (isDaytime) {
      return <FewCloudsDay />;
    }
    return <FewCloudsNight />;
  } else if (weatherId === 802) {
    return <ScatteredClouds />;
  } else if (weatherId === 803 || weatherId === 804) {
    return <BrokenClouds />;
  } else if (weatherId === 800) {
    if (isDaytime) {
      return <ClearSkyDay />;
    }
    return <ClearSkyNight />;
  } else {
    return <ClearSkyDay />;
  }
};

Icon.propTypes = {
  weatherId: PropTypes.number.isRequired,
  isDaytime: PropTypes.bool
};

export default Icon;
