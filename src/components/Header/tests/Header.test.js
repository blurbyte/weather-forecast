import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';

jest.mock('../Logo', () => 'Logo');
jest.mock('../../SearchCity', () => 'SearchCity');

test('renders correctly', () => {
  const component = renderer.create(<Header fetchForecast={jest.fn()} />);
  expect(component.toJSON()).toMatchSnapshot();
});
