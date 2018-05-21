import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import { getCities } from '../../services/forecast';
import { delay } from '../../utils';
import { Magnifier } from '../Icons';
import Input from './Input';
import Form from './Form';
import Icon from './Icon';
import FoundCities from './FoundCities';

class Search extends Component {
  state = {
    search: '',
    foundCities: [],
    loading: false
  };

  fetchCities = async search => {
    // Guards agains failed API responses
    // Since it accepts only at least 3 characters as search
    if (search.length > 2) {
      this.setState({ loading: true });
      const cities = await getCities(search);
      await delay(300);
      this.setState({ foundCities: cities, loading: false });
    }
  };

  debounceFetch = debounce(() => {
    this.fetchCities(this.state.search);
  }, 400);

  handleSearch = e => {
    const search = e.target.value;
    // Functional state to trigger debounce after state change
    this.setState({ search }, () => {
      this.debounceFetch();
    });
  };

  resetFoundCities = () => {
    this.setState({ foundCities: [] });
  };

  render() {
    return (
      <Form>
        <Input type="text" placeholder="Your city name" onChange={this.handleSearch} onBlur={this.resetFoundCities} />
        <Icon>
          <Magnifier />
        </Icon>
        {this.state.foundCities.length > 0 && <FoundCities cities={this.state.foundCities} />}
      </Form>
    );
  }
}

export default Search;
