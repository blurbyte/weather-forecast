import React from 'react';
import renderer from 'react-test-renderer';

import SearchCity from '../index';

jest.mock('../../SearchInput', () => 'SearchInput');
jest.mock('../../Icons', () => ({
  Magnifier: 'Magnifier'
}));

test('renders correctly', () => {
  const component = renderer.create(<SearchCity fetchForecast={jest.fn()} />);
  expect(component.toJSON()).toMatchSnapshot();
});
