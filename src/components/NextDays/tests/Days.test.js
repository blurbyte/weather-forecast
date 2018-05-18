import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Days from '../Days';

test('renders correctly', () => {
  const component = renderer.create(<Days />);
  expect(component.toJSON()).toMatchSnapshot();
});
