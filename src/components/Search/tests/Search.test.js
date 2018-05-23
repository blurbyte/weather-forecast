import React from 'react';
import renderer from 'react-test-renderer';

import Search from '../index';

jest.mock('../../SearchInput', () => 'SearchInput');
jest.mock('../../Icons', () => ({
  Magnifier: 'Magnifier'
}));

const mockedEvent = {
  preventDefault: jest.fn()
};

const foundCities = [
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

test('renders correctly', () => {
  const component = renderer.create(<Search fetchForecast={jest.fn()} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when some cities got found', () => {
  const component = renderer.create(<Search fetchForecast={jest.fn()} />);

  const instance = component.getInstance();
  instance.setState({ foundCities });

  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when no matches got found', () => {
  const component = renderer.create(<Search fetchForecast={jest.fn()} />);

  const instance = component.getInstance();
  instance.setState({ foundCities: [], nothingFound: true });

  expect(component.toJSON()).toMatchSnapshot();
});

test('handleSubmit() handles submitting form correctly when some cities got found', () => {
  const fetchForecast = jest.fn();
  const component = renderer.create(<Search fetchForecast={fetchForecast} />);

  const instance = component.getInstance();
  instance.setState({ foundCities });
  instance.handleSubmit(mockedEvent);

  expect(fetchForecast).toHaveBeenCalledWith(foundCities[0].cityId);
});

test('handleSubmit() resets form if no cities were found', () => {
  const fetchForecast = jest.fn();
  const component = renderer.create(<Search fetchForecast={fetchForecast} />);

  const expectedState = {
    search: '',
    foundCities: [],
    nothingFound: false
  };

  const instance = component.getInstance();
  instance.setState({ foundCities: [], search: 'Taylorswift', nothingFound: true });
  instance.handleSubmit(mockedEvent);

  expect(instance.state).toEqual(expectedState);
});
