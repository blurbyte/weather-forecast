// Mobile devices full screen search

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Search from '../../containers/Search';
import SearchCityResult from '../SearchCityResult';
import Overlay from './Overlay';
import OpenButton from './OpenButton';
import TopBar from './TopBar';
import Input from './Input';
import Status from './Status';
import List from './List';
import ListItem from './ListItem';

class SearchCityOverlay extends Component {
  static propTypes = {
    fetchForecast: PropTypes.func.isRequired
  };

  inputRef = React.createRef();

  state = {
    isExpanded: false
  };

  showOverlay = () => {
    this.setState({ isExpanded: true });
  };

  hideOverlay = () => {
    this.setState({ isExpanded: false });
  };

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <Fragment>
        <OpenButton onClick={this.showOverlay} />
        {this.state.isExpanded && (
          <Overlay>
            <TopBar onClose={this.hideOverlay} />
            <Search fetchForecast={this.props.fetchForecast}>
              {({ search, foundCities, nothingFound, handleSearch, fetchForecast, resetForm }) => (
                <Fragment>
                  <Input placeholder="Your city name" value={search} onChange={handleSearch} innerRef={this.inputRef} />
                  {foundCities.length > 0 && (
                    <SearchCityResult
                      list={List}
                      listItem={ListItem}
                      cities={foundCities}
                      fetchForecast={fetchForecast}
                    />
                  )}
                  {!foundCities.length &&
                    nothingFound && (
                      <Status
                        onClick={() => {
                          resetForm();
                          // Focus search input back after resetting form
                          this.focusInput();
                        }}
                      >
                        No cities found
                      </Status>
                    )}
                </Fragment>
              )}
            </Search>
          </Overlay>
        )}
      </Fragment>
    );
  }
}

export default SearchCityOverlay;
