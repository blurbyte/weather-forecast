import React from 'react';
import renderer from 'react-test-renderer';

import MainInfo from '../MainInfo';

test('renders correctly', () => {
  const props = {
    temp: 12.34,
    weatherId: 800
  };

  const component = renderer.create(<MainInfo {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
