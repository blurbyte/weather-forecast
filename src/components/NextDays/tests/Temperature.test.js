import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Temperature from '../Temperature';

test('renders correctly', () => {
  const component = renderer.create(<Temperature />);
  expect(component.toJSON()).toMatchSnapshot();
});
