import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from '../Input';

test('renders correctly', () => {
  const component = renderer.create(<Input />);
  expect(component.toJSON()).toMatchSnapshot();
});
