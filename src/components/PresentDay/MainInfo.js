import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import removeDecimals from '../../utils/removeDecimals';
import BaseRow from '../Row';
import WeatherIcon from '../WeatherIcon';
import Temperature from './Temperature';

const Row = styled(BaseRow)`
  margin-top: 0.4rem;
`;

const MainInfo = ({ temp, weatherId }) => (
  <Row>
    <WeatherIcon weatherId={weatherId} />
    <Temperature>{removeDecimals(temp)}&deg;</Temperature>
  </Row>
);

MainInfo.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherId: PropTypes.number.isRequired
};

export default MainInfo;
