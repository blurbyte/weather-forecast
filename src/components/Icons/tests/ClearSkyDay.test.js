import React from 'react';
import renderer from 'react-test-renderer';

import ClearSkyDay from '../ClearSkyDay';

test('renders correctly', () => {
  const component = renderer.create(<ClearSkyDay />);
  expect(component.toJSON()).toMatchSnapshot();
});
