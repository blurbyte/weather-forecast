import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import WeatherIcon from '../WeatherIcon';

jest.mock('../../Icons', () => ({
  ClearSkyDay: 'ClearSkyDay'
}));

test('renders correctly', () => {
  const component = renderer.create(<WeatherIcon />);
  expect(component.toJSON()).toMatchSnapshot();
});
