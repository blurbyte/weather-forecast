import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dayTheme } from '../../../styles/themes';
import List from '../List';

test('renders correctly', () => {
  const component = renderer.create(<List theme={dayTheme} />);
  expect(component.toJSON()).toMatchSnapshot();
});
