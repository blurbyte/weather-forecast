import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import Day from './Day';

const Days = ({ days }) => {
  const dates = Object.keys(days);

  return <List>{dates.map(date => <Day key={date} timestamp={date} {...days[date]} />)}</List>;
};

Days.propTypes = {
  days: PropTypes.object.isRequired
};

export default Days;
