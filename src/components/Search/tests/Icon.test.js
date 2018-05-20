import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Icon from '../Icon';

test('renders correctly', () => {
  const component = renderer.create(<Icon />);
  expect(component.toJSON()).toMatchSnapshot();
});
