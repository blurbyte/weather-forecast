import React from 'react';
import renderer from 'react-test-renderer';

import City from '../City';

test('renders correctly', () => {
  const props = {
    cityId: 234567,
    name: 'London',
    country: 'US'
  };

  const component = renderer.create(<City {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
