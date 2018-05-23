import React from 'react';
import renderer from 'react-test-renderer';

import FoundCities from '../FoundCities';

test('renders correctly', () => {
  const cities = [
    {
      cityId: 234567,
      name: 'London',
      country: 'US'
    },
    {
      cityId: 87654,
      name: 'London',
      country: 'GB'
    }
  ];

  const component = renderer.create(<FoundCities cities={cities} fetchForecast={jest.fn()} />);
  expect(component.toJSON()).toMatchSnapshot();
});
