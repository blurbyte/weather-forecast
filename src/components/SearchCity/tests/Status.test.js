import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Status from '../Status';

test('renders correctly', () => {
  const component = renderer.create(<Status />);
  expect(component.toJSON()).toMatchSnapshot();
});
