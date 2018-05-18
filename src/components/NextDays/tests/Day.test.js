import React from 'react';
import renderer from 'react-test-renderer';

import Day from '../Day';

jest.mock('../../WeatherIcon', () => 'WeatherIcon');

test('renders correctly', () => {
  const component = renderer.create(<Day />);
  expect(component.toJSON()).toMatchSnapshot();
});
