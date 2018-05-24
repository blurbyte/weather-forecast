import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

class Overlay extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.overlayContainer = document.createElement('div');
    document.body.appendChild(this.overlayContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.overlayContainer);
  }

  render() {
    const { children, ...rest } = this.props;
    return createPortal(<Wrapper {...rest}>{children}</Wrapper>, this.overlayContainer);
  }
}

export default Overlay;
