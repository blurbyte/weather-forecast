// Fetch data from API and passes it to children
// Iplemented with render prop pattern
// cityId in state is mainly for long polling and as localStorage fallback

import { Component } from 'react';
import PropTypes from 'prop-types';

import { getCurrentWeather, getFiveDayForecast } from '../../services/forecast';

class Forecast extends Component {
  static propTypes = {
    initialCityId: PropTypes.number,
    children: PropTypes.func.isRequired
  };

  static defaultProps = {
    initialCityId: 2643743
  };

  state = {
    cityId: this.props.initialCityId,
    presentDay: {},
    nextDays: {},
    loading: true
  };

  fetchForecast = async cityId => {
    this.setState({ loading: true });

    // Waits for both reauest for better UX
    const [presentDay, nextDays] = await Promise.all([getCurrentWeather(cityId), getFiveDayForecast(cityId)]);

    // sets new cityId passed from search in state and localStorage
    localStorage.setItem('cityId', cityId);
    this.setState({ cityId, presentDay, nextDays, loading: false });
  };

  pollForecast = () => {
    // Updates forecast every hour
    this.updateForecast = setInterval(() => {
      this.fetchForecast(this.state.cityId);
    }, 1000 * 60 * 60);
  };

  componentDidMount() {
    // retrieve cityId value from localStorage if it exists
    const cityId = localStorage.getItem('cityId') ? localStorage.getItem('cityId') : this.state.cityId;
    this.fetchForecast(cityId);
    this.pollForecast();
  }

  componentWillUnmount() {
    clearInterval(this.updateForecast);
  }

  render() {
    return this.props.children({
      presentDay: this.state.presentDay,
      nextDays: this.state.nextDays,
      loading: this.state.loading,
      fetchForecast: this.fetchForecast
    });
  }
}

export default Forecast;
