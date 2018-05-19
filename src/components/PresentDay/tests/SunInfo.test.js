import React from 'react';
import renderer from 'react-test-renderer';

import SunInfo from '../SunInfo';

jest.mock('../Label', () => 'Label');

test('renders correctly', () => {
  const props = {
    sunrise: 1526714160,
    sunset: 1526678219
  };

  const component = renderer.create(<SunInfo {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
