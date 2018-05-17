import React from 'react';
import styled from 'styled-components';

import BaseRow from '../Row';
import WeatherIcon from './WeatherIcon';
import Temperature from './Temperature';

const Row = styled(BaseRow)`
  margin-top: 0.4rem;
`;

const MainInfo = () => (
  <Row>
    <WeatherIcon />
    <Temperature>19&deg;</Temperature>
  </Row>
);

export default MainInfo;
