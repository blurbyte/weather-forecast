import React from 'react';
import renderer from 'react-test-renderer';

import CloseButton from '../CloseButton';

test('renders correctly', () => {
  const component = renderer.create(<CloseButton />);
  expect(component.toJSON()).toMatchSnapshot();
});
