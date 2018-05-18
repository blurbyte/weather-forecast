import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';
import Text from '../Text';
import WeatherIcon from '../WeatherIcon';
import ListItem from './ListItem';
import Info from './Info';
import Temperatures from './Temperatures';
import Temperature from './Temperature';

const Summary = styled(Text)`
  ${media.tablet`
    display: none;
  `};
`;

const Day = () => (
  <ListItem>
    <Text big>Thursday</Text>
    <Info>
      <WeatherIcon small />
      <Temperatures>
        <Temperature>20</Temperature>
        <Temperature dimmed>14</Temperature>
      </Temperatures>
    </Info>
    <Summary>Clear sky</Summary>
  </ListItem>
);

export default Day;
