import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCurrentWeather, getFiveDayForecast } from '../../services/forecast';

class Forecast extends Component {
  static propTypes = {
    city: PropTypes.string
  };

  static defaultProps = {
    city: 'London,GB'
  };

  state = {
    presentDay: {},
    nextDays: []
  };

  fetchForecast = async city => {
    const [presentDay, nextDays] = await Promise.all([getCurrentWeather(city), getFiveDayForecast(city)]);

    this.setState({ presentDay, nextDays });
  };

  componentDidMount() {
    this.fetchForecast(this.props.city);
  }

  render() {
    return <div />;
  }
}

export default Forecast;
