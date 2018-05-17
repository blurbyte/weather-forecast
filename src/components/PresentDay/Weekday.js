import React from 'react';
import styled from 'styled-components';

import Text from '../Text';
import BaseRow from '../Row';
import Label from './Label';

const Row = styled(BaseRow)`
  margin: 1rem 0;
`;

const Weekday = () => (
  <Row>
    <Text big>
      <Label>Today</Label> Wednesday
    </Text>
  </Row>
);

export default Weekday;
