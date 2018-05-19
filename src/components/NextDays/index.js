import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';
import Days from './Days';

const NextDays = ({ days }) => (
  <Content>
    <Days days={days} />
  </Content>
);

NextDays.propTypes = {
  days: PropTypes.object.isRequired
};

export default NextDays;
