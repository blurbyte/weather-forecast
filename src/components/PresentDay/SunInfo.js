import React from 'react';
import PropTypes from 'prop-types';

import formatHour from '../../utils/formatHour';
import Row from '../Row';
import InfoText from './InfoText';
import Label from './Label';

const SunInfo = ({ sunrise, sunset }) => (
  <Row>
    <InfoText>
      <Label>Sunrise</Label> {formatHour(sunrise * 1000)}
    </InfoText>
    <InfoText>
      <Label>Sunset</Label> {formatHour(sunset * 1000)}
    </InfoText>
  </Row>
);

SunInfo.propTypes = {
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired
};

export default SunInfo;
