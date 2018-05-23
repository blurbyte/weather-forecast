import React from 'react';
import PropTypes from 'prop-types';

import { formatHour } from '../../utils';
import Row from '../Row';
import InfoText from './InfoText';
import Label from './Label';

const SunInfo = ({ sunrise, sunset }) => (
  <Row>
    <InfoText>
      <Label>Sunrise</Label> {formatHour(sunrise)}
    </InfoText>
    <InfoText>
      <Label>Sunset</Label> {formatHour(sunset)}
    </InfoText>
  </Row>
);

SunInfo.propTypes = {
  sunrise: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sunset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default SunInfo;
