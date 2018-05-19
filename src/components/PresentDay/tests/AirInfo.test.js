import React from 'react';
import renderer from 'react-test-renderer';

import AirInfo from '../AirInfo';

jest.mock('../Label', () => 'Label');

test('renders correctly', () => {
  const props = {
    wind: 4.6,
    humidity: 76,
    pressure: 1021.22
  };

  const component = renderer.create(<AirInfo {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
