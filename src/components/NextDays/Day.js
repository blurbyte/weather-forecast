// Single day with basic info and icon

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import weekday from '../../utils/weekday';
import removeDecimals from '../../utils/removeDecimals';
import media from '../../styles/media';
import Text from '../Text';
import WeatherIcon from '../WeatherIcon';
import ListItem from './ListItem';
import Info from './Info';
import Temperatures from './Temperatures';
import Temperature from './Temperature';

const Summary = styled(Text)`
  text-transform: capitalize;

  ${media.tablet`
    display: none;
  `};
`;

const Day = ({ weatherId, description, tempMax, tempMin, timestamp }) => (
  <ListItem>
    <Text big>{weekday(timestamp)}</Text>
    <Info>
      <WeatherIcon weatherId={weatherId} small />
      <Temperatures>
        <Temperature>{removeDecimals(tempMax)}</Temperature>
        <Temperature dimmed>{removeDecimals(tempMin)}</Temperature>
      </Temperatures>
    </Info>
    <Summary>{description}</Summary>
  </ListItem>
);

Day.propTypes = {
  weatherId: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  tempMax: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired
};

export default Day;
