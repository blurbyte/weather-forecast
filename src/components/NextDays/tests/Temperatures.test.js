import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Temperatures from '../Temperatures';

test('renders correctly', () => {
  const component = renderer.create(<Temperatures />);
  expect(component.toJSON()).toMatchSnapshot();
});
