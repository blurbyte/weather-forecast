import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { dayTheme, nightTheme } from '../../styles/themes';
import { isDaytime } from '../../utils';
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
      <Forecast initialCityId={2643743}>
        {({ presentDay, nextDays, loading, fetchForecast }) =>
          loading ? null : (
            // Calculates current theme depending on daytime
            <ThemeProvider
              theme={isDaytime(presentDay.sunrise * 1000, presentDay.sunset * 1000, Date.now()) ? dayTheme : nightTheme}
            >
              <Layout>
                <Header fetchForecast={fetchForecast} />
                <MainContent>
                  <PresentDay {...presentDay} />
                  <NextDays days={nextDays} />
                </MainContent>
                <Footer />
              </Layout>
            </ThemeProvider>
          )
        }
      </Forecast>
    );
  }
}

export default App;
