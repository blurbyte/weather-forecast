import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CountryCode from '../CountryCode';

test('renders correctly', () => {
  const component = renderer.create(<CountryCode />);
  expect(component.toJSON()).toMatchSnapshot();
});
