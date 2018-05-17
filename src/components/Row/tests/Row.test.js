import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Row from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Row />);
  expect(component.toJSON()).toMatchSnapshot();
});
