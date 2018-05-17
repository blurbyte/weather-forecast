import React from 'react';
import renderer from 'react-test-renderer';

import Weekday from '../Weekday';

test('renders correctly', () => {
  const component = renderer.create(<Weekday />);
  expect(component.toJSON()).toMatchSnapshot();
});
