import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import { getCities } from '../../services/forecast';
import { Magnifier } from '../Icons';
import Input from './Input';
import Form from './Form';
import Icon from './Icon';

class Search extends Component {
  state = {
    search: '',
    foundCities: [],
    loading: false
  };

  fetchCities = async search => {
    this.setState({ loading: true });
    const cities = await getCities(search);
    this.setState({ foundCities: cities, loading: false });
  };

  debounceFetch = debounce(() => {
    this.fetchCities(this.state.search);
  }, 400);

  handleSearch = e => {
    const search = e.target.value;
    this.setState({ search }, () => {
      this.debounceFetch();
    });
  };

  render() {
    return (
      <Form>
        <Input type="text" placeholder="Your city name" onChange={this.handleSearch} />
        <Icon>
          <Magnifier />
        </Icon>
      </Form>
    );
  }
}

export default Search;