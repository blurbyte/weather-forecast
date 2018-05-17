import React from 'react';

import Row from '../Row';
import InfoText from './InfoText';
import Label from './Label';

const SunInfo = () => (
  <Row>
    <InfoText>
      <Label>Sunrise</Label> 5:50
    </InfoText>
    <InfoText>
      <Label>Sunset</Label> 20:45
    </InfoText>
  </Row>
);

export default SunInfo;
