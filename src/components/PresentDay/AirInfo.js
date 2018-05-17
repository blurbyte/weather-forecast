import React from 'react';

import Row from '../Row';
import InfoText from './InfoText';
import Label from './Label';

const AirInfo = () => (
  <Row>
    <InfoText>
      <Label>Wind</Label> 5.1 m/s
    </InfoText>
    <InfoText>
      <Label>Humidity</Label> 42 %
    </InfoText>
    <InfoText>
      <Label>Pressure</Label> 1012 hpa
    </InfoText>
  </Row>
);

export default AirInfo;
