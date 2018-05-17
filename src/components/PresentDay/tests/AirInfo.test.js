import React from 'react';
import renderer from 'react-test-renderer';

import AirInfo from '../AirInfo';

test('renders correctly', () => {
  const component = renderer.create(<AirInfo />);
  expect(component.toJSON()).toMatchSnapshot();
});
