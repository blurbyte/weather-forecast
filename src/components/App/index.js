import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { dayTheme, nightTheme } from '../../styles/themes';
import isDaytime from '../../utils/isDaytime';
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
      <Forecast city="Paris,FR">
        {({ presentDay, nextDays, loading }) => (
          <ThemeProvider
            theme={isDaytime(presentDay.sunrise * 1000, presentDay.sunset * 1000, Date.now()) ? dayTheme : nightTheme}
          >
            <Layout>
              <Header />
              {loading ? null : (
                <MainContent>
                  <PresentDay {...presentDay} />
                  <NextDays days={nextDays} />
                </MainContent>
              )}
              <Footer />
            </Layout>
          </ThemeProvider>
        )}
      </Forecast>
    );
  }
}

export default App;
