import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';

jest.mock('../../Icons', () => ({ Logo: 'Logo' }));
jest.mock('../../SearchCity', () => 'SearchCity');
jest.mock('../../SearchCityOverlay', () => 'SearchCityOverlay');

test('renders correctly', () => {
  const component = renderer.create(<Header fetchForecast={jest.fn()} />);
  expect(component.toJSON()).toMatchSnapshot();
});
