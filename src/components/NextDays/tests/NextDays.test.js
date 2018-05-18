import React from 'react';
import renderer from 'react-test-renderer';

import NextDays from '../index';

jest.mock('../../WeatherIcon', () => 'WeatherIcon');

test('renders correctly', () => {
  const component = renderer.create(<NextDays />);
  expect(component.toJSON()).toMatchSnapshot();
});
