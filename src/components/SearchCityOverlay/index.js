import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Overlay from '../Overlay';
import OpenButton from './OpenButton';
import TopBar from './TopBar';
import Input from './Input';

class SearchCityOverlay extends Component {
  static propTypes = {
    fetchForecast: PropTypes.func.isRequired
  };

  state = {
    isExpanded: false
  };

  showOverlay = () => {
    this.setState({ isExpanded: true });
  };

  hideOverlay = () => {
    this.setState({ isExpanded: false });
  };

  render() {
    return (
      <Fragment>
        <OpenButton onClick={this.showOverlay} />
        {this.state.isExpanded && (
          <Overlay>
            <TopBar onClose={this.hideOverlay} />
            <Input placeholder="Your city name" />
          </Overlay>
        )}
      </Fragment>
    );
  }
}

export default SearchCityOverlay;
