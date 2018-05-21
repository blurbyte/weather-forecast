import React from 'react';
import renderer from 'react-test-renderer';

import Search from '../index';

jest.mock('../Input', () => 'Input');
jest.mock('../../Icons', () => ({
  Magnifier: 'Magnifier'
}));

test('renders correctly', () => {
  const component = renderer.create(<Search />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when some cities got found', () => {
  const component = renderer.create(<Search />);

  const instance = component.getInstance();
  instance.setState({
    foundCities: [
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
    ]
  });

  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when no matches got found', () => {
  const component = renderer.create(<Search />);

  const instance = component.getInstance();
  instance.setState({ foundCities: [], nothingFound: true });

  expect(component.toJSON()).toMatchSnapshot();
});
