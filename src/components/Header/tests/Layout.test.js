import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dayTheme } from '../../../styles/themes';
import Layout from '../Layout';

test('renders correctly', () => {
  const component = renderer.create(<Layout theme={dayTheme} />);
  expect(component.toJSON()).toMatchSnapshot();
});
