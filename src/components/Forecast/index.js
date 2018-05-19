// Fetch data from API and passes it to children
// Iplemented with render prop pattern

import { Component } from 'react';
import PropTypes from 'prop-types';

import { getCurrentWeather, getFiveDayForecast } from '../../services/forecast';

class Forecast extends Component {
  static propTypes = {
    city: PropTypes.string,
    children: PropTypes.func.isRequired
  };

  static defaultProps = {
    city: 'London,GB'
  };

  state = {
    presentDay: {},
    nextDays: {},
    loading: true
  };

  fetchForecast = async city => {
    this.setState({ loading: true });

    const [presentDay, nextDays] = await Promise.all([getCurrentWeather(city), getFiveDayForecast(city)]);

    this.setState({ presentDay, nextDays, loading: false });
  };

  componentDidMount() {
    this.fetchForecast(this.props.city);
  }

  render() {
    return this.props.children(this.state);
  }
}

export default Forecast;
