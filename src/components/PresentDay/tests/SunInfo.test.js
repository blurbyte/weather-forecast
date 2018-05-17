import React from 'react';
import renderer from 'react-test-renderer';

import SunInfo from '../SunInfo';

test('renders correctly', () => {
  const component = renderer.create(<SunInfo />);
  expect(component.toJSON()).toMatchSnapshot();
});
