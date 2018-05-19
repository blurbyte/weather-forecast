import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import List from '../List';

test('renders correctly', () => {
  const component = renderer.create(<List />);
  expect(component.toJSON()).toMatchSnapshot();
});
