import React from 'react';
import renderer from 'react-test-renderer';

import MainInfo from '../MainInfo';

test('renders correctly', () => {
  const component = renderer.create(<MainInfo />);
  expect(component.toJSON()).toMatchSnapshot();
});
