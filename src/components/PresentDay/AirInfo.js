import React from 'react';
import PropTypes from 'prop-types';

import { removeDecimals } from '../../utils';
import Row from '../Row';
import InfoText from './InfoText';
import Label from './Label';

const AirInfo = ({ wind, humidity, pressure }) => (
  <Row>
    <InfoText>
      <Label>Wind</Label> {removeDecimals(wind)} m/s
    </InfoText>
    <InfoText>
      <Label>Humidity</Label> {humidity} %
    </InfoText>
    <InfoText>
      <Label>Pressure</Label> {removeDecimals(pressure)} hpa
    </InfoText>
  </Row>
);

AirInfo.propTypes = {
  wind: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired
};

export default AirInfo;
