import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Footer />);
  expect(component.toJSON()).toMatchSnapshot();
});
