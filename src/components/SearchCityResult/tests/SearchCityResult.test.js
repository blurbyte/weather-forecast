import React from 'react';
import renderer from 'react-test-renderer';

import SearchCityResult from '../index';

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

  const List = () => 'List';
  const ListItem = () => 'ListItem';

  const component = renderer.create(
    <SearchCityResult list={List} listItem={ListItem} cities={cities} fetchForecast={jest.fn()} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
