import React from 'react';
import renderer from 'react-test-renderer';

import PresentDay from '../index';

jest.mock('../../WeatherIcon', () => 'WeatherIcon');

test('renders correctly', () => {
  const props = {
    name: 'London',
    description: 'clear sky',
    temp: 12.34,
    sunrise: 1526714160,
    sunset: 1526678219,
    humidity: 45,
    wind: 2.4,
    pressure: 1024.24,
    weatherId: 800
  };

  const component = renderer.create(<PresentDay {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
