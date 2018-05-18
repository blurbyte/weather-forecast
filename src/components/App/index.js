import React, { Component } from 'react';

import Header from '../Header';
import PresentDay from '../PresentDay';
import NextDays from '../NextDays';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PresentDay />
        <NextDays />
      </div>
    );
  }
}

export default App;
