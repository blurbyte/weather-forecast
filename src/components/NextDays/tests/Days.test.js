import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { dayTheme } from '../../../styles/themes';
import Days from '../Days';

jest.mock('../../WeatherIcon', () => 'WeatherIcon');

test('renders correctly', () => {
  const days = {
    '5/21/2018': {
      weatherId: 800,
      description: 'clear sky',
      tempMax: 18.75,
      tempMin: 9.7
    },
    '6/21/2018': {
      weatherId: 800,
      description: 'clear sky',
      tempMax: 14.3,
      tempMin: 11.2
    },
    '7/21/2018': {
      weatherId: 801,
      description: 'clouds',
      tempMax: 11.23,
      tempMin: 9
    }
  };

  const component = renderer.create(
    <ThemeProvider theme={dayTheme}>
      <Days days={days} />
    </ThemeProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
