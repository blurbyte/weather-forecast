import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Text from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Text />);
  expect(component.toJSON()).toMatchSnapshot();
});
