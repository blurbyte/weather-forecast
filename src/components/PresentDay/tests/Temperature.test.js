import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dayTheme } from '../../../styles/themes';
import Temperature from '../Temperature';

test('renders correctly', () => {
  const component = renderer.create(<Temperature theme={dayTheme} />);
  expect(component.toJSON()).toMatchSnapshot();
});
