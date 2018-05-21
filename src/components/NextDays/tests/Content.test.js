import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Content from '../Content';

test('renders correctly', () => {
  const component = renderer.create(<Content />);
  expect(component.toJSON()).toMatchSnapshot();
});
