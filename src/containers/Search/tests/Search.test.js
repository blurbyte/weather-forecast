import React from 'react';
import renderer from 'react-test-renderer';

import Search from '../index';

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

test('handleSubmit() handles submitting form correctly when some cities got found', () => {
  const renderFunc = jest.fn().mockReturnValue(null);
  const fetchForecast = jest.fn();
  const component = renderer.create(<Search fetchForecast={fetchForecast}>{renderFunc}</Search>);

  const instance = component.getInstance();
  instance.setState({ foundCities });
  instance.handleSubmit(mockedEvent);

  expect(fetchForecast).toHaveBeenCalledWith(foundCities[0].cityId);
});

test('handleSubmit() resets form if no cities were found', () => {
  const renderFunc = jest.fn().mockReturnValue(null);
  const fetchForecast = jest.fn();
  const component = renderer.create(<Search fetchForecast={fetchForecast}>{renderFunc}</Search>);

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
