import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { weekday } from '../../utils';
import Text from '../Text';
import BaseRow from '../Row';
import Label from './Label';

const Row = styled(BaseRow)`
  margin: 1rem 0;
`;

const Weekday = ({ timestamp }) => (
  <Row>
    <Text big>
      <Label>Today</Label> {weekday(timestamp)}
    </Text>
  </Row>
);

Weekday.propTypes = {
  timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Weekday;
