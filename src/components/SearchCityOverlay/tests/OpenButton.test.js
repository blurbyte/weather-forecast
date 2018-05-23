import React from 'react';
import renderer from 'react-test-renderer';

import OpenButton from '../OpenButton';

test('renders correctly', () => {
  const component = renderer.create(<OpenButton />);
  expect(component.toJSON()).toMatchSnapshot();
});
