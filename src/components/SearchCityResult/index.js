// Component rendering results of search
// Custom list and list item components should be provided

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import City from './City';

class SearchCityResult extends Component {
  static propTypes = {
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        cityId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
      })
    ),
    fetchForecast: PropTypes.func.isRequired,
    list: PropTypes.func.isRequired,
    listItem: PropTypes.func.isRequired
  };

  render() {
    const { cities, fetchForecast, list: InjectedList, listItem } = this.props;

    return (
      <InjectedList>
        {cities.map(city => (
          <City listItem={listItem} key={`city-${city.cityId}`} {...city} fetchForecast={fetchForecast} />
        ))}
      </InjectedList>
    );
  }
}

export default SearchCityResult;
