import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';

jest.mock('../Logo', () => 'Logo');

test('renders correctly', () => {
  const component = renderer.create(<Header />);
  expect(component.toJSON()).toMatchSnapshot();
});