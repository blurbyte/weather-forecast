import React from 'react';
import styled from 'styled-components';

import { ClearSkyDay } from '../Icons';

const Wrapper = styled.div`
  width: 11rem;
  height: 11rem;
`;

const WeatherIcon = () => (
  <Wrapper>
    <ClearSkyDay />
  </Wrapper>
);

export default WeatherIcon;
