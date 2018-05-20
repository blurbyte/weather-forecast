import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Search from '../index';

jest.mock('../Input', () => 'Input');
jest.mock('../../Icons', () => ({
  Magnifier: 'Magnifier'
}));

test('renders correctly', () => {
  const component = renderer.create(<Search />);
  expect(component.toJSON()).toMatchSnapshot();
});
