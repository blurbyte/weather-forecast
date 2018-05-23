import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Hitbox from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Hitbox />);
  expect(component.toJSON()).toMatchSnapshot();
});
