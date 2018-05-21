// Fetch data from API and passes it to children
// Iplemented with render prop pattern

import { Component } from 'react';
import PropTypes from 'prop-types';

import { getCurrentWeather, getFiveDayForecast } from '../../services/forecast';

class Forecast extends Component {
  static propTypes = {
    cityId: PropTypes.number,
    children: PropTypes.func.isRequired
  };

  static defaultProps = {
    cityId: 2643743
  };

  state = {
    presentDay: {},
    nextDays: {},
    loading: true
  };

  fetchForecast = async cityId => {
    this.setState({ loading: true });

    const [presentDay, nextDays] = await Promise.all([getCurrentWeather(cityId), getFiveDayForecast(cityId)]);

    this.setState({ presentDay, nextDays, loading: false });
  };

  componentDidMount() {
    this.fetchForecast(this.props.cityId);
  }

  render() {
    return this.props.children(this.state);
  }
}

export default Forecast;
