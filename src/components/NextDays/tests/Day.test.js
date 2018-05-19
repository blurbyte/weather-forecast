import React from 'react';
import renderer from 'react-test-renderer';

import Day from '../Day';

jest.mock('../../WeatherIcon', () => 'WeatherIcon');

test('renders correctly', () => {
  const props = {
    weatherId: 800,
    description: 'clear sky',
    tempMax: 18.75,
    tempMin: 9.7,
    timestamp: '5/21/2018'
  };

  const component = renderer.create(<Day {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
