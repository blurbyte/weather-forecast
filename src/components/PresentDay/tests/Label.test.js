import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Label from '../Label';

test('renders correctly', () => {
  const component = renderer.create(<Label />);
  expect(component.toJSON()).toMatchSnapshot();
});
