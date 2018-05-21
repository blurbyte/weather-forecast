import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ListItem from '../ListItem';

test('renders correctly', () => {
  const component = renderer.create(<ListItem />);
  expect(component.toJSON()).toMatchSnapshot();
});
