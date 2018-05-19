import React from 'react';
import renderer from 'react-test-renderer';

import Weekday from '../Weekday';

jest.mock('../Label', () => 'Label');

test('renders correctly', () => {
  const component = renderer.create(<Weekday timestamp={1526714160} />);
  expect(component.toJSON()).toMatchSnapshot();
});
