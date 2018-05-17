import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CityName from '../CityName';

test('renders correctly', () => {
  const component = renderer.create(<CityName />);
  expect(component.toJSON()).toMatchSnapshot();
});
