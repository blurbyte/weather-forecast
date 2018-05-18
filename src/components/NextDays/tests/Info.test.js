import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Info from '../Info';

test('renders correctly', () => {
  const component = renderer.create(<Info />);
  expect(component.toJSON()).toMatchSnapshot();
});
