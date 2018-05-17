import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Banner from '../Banner';

test('renders correctly', () => {
  const component = renderer.create(<Banner />);
  expect(component.toJSON()).toMatchSnapshot();
});
