import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dayTheme } from '../../../styles/themes';
import Input from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Input theme={dayTheme} />);
  expect(component.toJSON()).toMatchSnapshot();
});
