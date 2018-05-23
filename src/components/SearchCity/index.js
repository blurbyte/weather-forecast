import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Search from '../../containers/Search';
import SearchInput from '../SearchInput';
import Form from './Form';
import FoundCities from './FoundCities';
import Status from './Status';

class SearchCity extends Component {
  static propTypes = {
    fetchForecast: PropTypes.func.isRequired
  };

  render() {
    return (
      <Search fetchForecast={this.props.fetchForecast}>
        {({
          search,
          foundCities,
          nothingFound,
          handleSearch,
          handleSubmit,
          fetchForecast,
          resetFoundCities,
          resetSearch
        }) => (
          <Form onSubmit={handleSubmit}>
            <SearchInput
              placeholder="Your city name"
              value={search}
              onChange={handleSearch}
              onBlur={resetFoundCities}
            />
            {foundCities.length > 0 && <FoundCities cities={foundCities} fetchForecast={fetchForecast} />}
            {!foundCities.length && nothingFound && <Status onMouseDown={resetSearch}>No cities found</Status>}
          </Form>
        )}
      </Search>
    );
  }
}

export default SearchCity;
