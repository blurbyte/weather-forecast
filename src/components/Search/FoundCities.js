// Dropdown with a list of matched cities

import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import City from './City';

const FoundCities = ({ cities }) => <List>{cities.map(city => <City key={city.cityId} {...city} />)}</List>;

FoundCities.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      cityId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    })
  )
};

export default FoundCities;
