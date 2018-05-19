import React from 'react';
import renderer from 'react-test-renderer';

import WeatherIcon from '../index';

jest.mock('../Icon', () => 'Icon');

test('renders correctly', () => {
  const component = renderer.create(<WeatherIcon weatherId={800} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when small prop is provided', () => {
  const component = renderer.create(<WeatherIcon weatherId={800} small />);
  expect(component.toJSON()).toMatchSnapshot();
});
