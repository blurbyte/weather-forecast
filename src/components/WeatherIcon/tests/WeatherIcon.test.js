import React from 'react';
import renderer from 'react-test-renderer';

import WeatherIcon from '../index';

jest.mock('../../Icons', () => ({
  ClearSkyDay: 'ClearSkyDay'
}));

test('renders correctly', () => {
  const component = renderer.create(<WeatherIcon />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when small prop is provided', () => {
  const component = renderer.create(<WeatherIcon small />);
  expect(component.toJSON()).toMatchSnapshot();
});
