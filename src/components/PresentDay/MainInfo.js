import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { removeDecimals } from '../../utils';
import BaseRow from '../Row';
import WeatherIcon from '../WeatherIcon';
import Temperature from './Temperature';

const Row = styled(BaseRow)`
  margin-top: 0.4rem;
`;

const MainInfo = ({ temp, weatherId, isDaytime }) => (
  <Row>
    <WeatherIcon weatherId={weatherId} isDaytime={isDaytime} />
    <Temperature>{removeDecimals(temp)}&deg;</Temperature>
  </Row>
);

MainInfo.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherId: PropTypes.number.isRequired,
  isDaytime: PropTypes.bool.isRequired
};

export default MainInfo;
