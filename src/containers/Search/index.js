// Fetch list of cities based on provided query

import { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import { getCities } from '../../services/forecast';

const MIN_SEARCH_QUERY_LEN = 3;

class Search extends Component {
  static propTypes = {
    fetchForecast: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
  };

  initialState = {
    search: '',
    foundCities: [],
    nothingFound: false
  };

  state = this.initialState;

  fetchCities = async search => {
    // Guards agains failed API responses
    // Since it accepts only at least 3 characters as search
    // Trims to remove whitespaces from input
    const trimmedQuery = search.trim();

    if (trimmedQuery.length >= MIN_SEARCH_QUERY_LEN) {
      const cities = await getCities(trimmedQuery);

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
  }, 250);

  handleSearch = e => {
    const search = e.target.value;
    // Functional state to trigger debounce after state change
    this.setState({ search }, () => {
      if (this.state.search.length < MIN_SEARCH_QUERY_LEN) {
        this.resetFoundCities();
        return;
      }
      this.debounceFetch();
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { foundCities } = this.state;

    // Grabs first city from a list
    // Otherwise resets form
    if (foundCities.length > 0) {
      this.props.fetchForecast(foundCities[0].cityId);
    }
    this.resetForm();
  };

  resetFoundCities = () => {
    this.setState({ foundCities: [], nothingFound: false });
  };

  resetForm = () => {
    this.setState(this.initialState);
  };

  render() {
    return this.props.children({
      ...this.state,
      handleSearch: this.handleSearch,
      handleSubmit: this.handleSubmit,
      fetchForecast: this.props.fetchForecast,
      resetFoundCities: this.resetFoundCities,
      resetForm: this.resetForm
    });
  }
}

export default Search;
