import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import MainContent from '../index';

test('renders correctly', () => {
  const component = renderer.create(<MainContent />);
  expect(component.toJSON()).toMatchSnapshot();
});
