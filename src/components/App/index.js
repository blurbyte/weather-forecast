import React, { Component } from 'react';

import MainContent from '../MainContent';
import Header from '../Header';
import PresentDay from '../PresentDay';
import NextDays from '../NextDays';
import Footer from '../Footer';
import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <MainContent>
          <PresentDay />
          <NextDays />
        </MainContent>
        <Footer />
      </Layout>
    );
  }
}

export default App;
