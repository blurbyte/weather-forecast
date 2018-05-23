// Dropdown with a list of matched cities

import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import City from './City';

const FoundCities = ({ cities, fetchForecast }) => (
  <List>{cities.map(city => <City key={`city-${city.cityId}`} {...city} fetchForecast={fetchForecast} />)}</List>
);

FoundCities.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      cityId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    })
  ),
  fetchForecast: PropTypes.func.isRequired
};

export default FoundCities;
