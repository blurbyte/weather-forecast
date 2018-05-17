import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Logo from '../Logo';

test('renders correctly', () => {
  const component = renderer.create(<Logo />);
  expect(component.toJSON()).toMatchSnapshot();
});
