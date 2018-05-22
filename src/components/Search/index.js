import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import { getCities } from '../../services/forecast';
import { Magnifier } from '../Icons';
import Input from './Input';
import Form from './Form';
import Icon from './Icon';
import FoundCities from './FoundCities';
import Status from './Status';

const MIN_SEARCH_QUERY_LEN = 3;

class Search extends Component {
  static propTypes = {
    fetchForecast: PropTypes.func.isRequired
  };

  state = {
    search: '',
    foundCities: [],
    nothingFound: false
  };

  fetchCities = async search => {
    // Guards agains failed API responses
    // Since it accepts only at least 3 characters as search
    if (search.length >= MIN_SEARCH_QUERY_LEN) {
      const cities = await getCities(search);

      if (cities.length > 0) {
        this.setState({ foundCities: cities });
      } else {
        // Displays status label when no cities matched search query
        this.setState({ foundCities: [], nothingFound: true });
      }
    }
  };

  debounceFetch = debounce(() => {
    this.fetchCities(this.state.search);
  }, 400);

  handleSearch = e => {
    const search = e.target.value;
    // Functional state to trigger debounce after state change
    this.setState({ search }, () => {
      if (this.state.search.length < MIN_SEARCH_QUERY_LEN) {
        this.resetFoundCities();
      }
      this.debounceFetch();
    });
  };

  resetFoundCities = () => {
    this.setState({ foundCities: [], nothingFound: false });
  };

  resetSearch = () => {
    this.setState({ search: '' });
  };

  render() {
    return (
      <Form>
        <Input
          type="text"
          placeholder="Your city name"
          value={this.state.search}
          onChange={this.handleSearch}
          onBlur={this.resetFoundCities}
        />
        <Icon>
          <Magnifier />
        </Icon>
        {this.state.foundCities.length > 0 && (
          <FoundCities cities={this.state.foundCities} fetchForecast={this.props.fetchForecast} />
        )}
        {!this.state.foundCities.length &&
          this.state.nothingFound && <Status onMouseDown={this.resetSearch}>No cities found</Status>}
      </Form>
    );
  }
}

export default Search;
