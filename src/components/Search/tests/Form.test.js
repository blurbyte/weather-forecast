import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Form from '../Form';

test('renders correctly', () => {
  const component = renderer.create(<Form />);
  expect(component.toJSON()).toMatchSnapshot();
});
