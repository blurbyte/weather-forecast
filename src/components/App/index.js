import React, { Component } from 'react';

import Forecast from '../Forecast';
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
        <Forecast city="Paris,FR">
          {({ presentDay, nextDays, loading }) =>
            loading ? null : (
              <MainContent>
                <PresentDay {...presentDay} />
                <NextDays days={nextDays} />
              </MainContent>
            )
          }
        </Forecast>
        <Footer />
      </Layout>
    );
  }
}

export default App;
