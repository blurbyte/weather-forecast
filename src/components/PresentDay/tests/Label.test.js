import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dayTheme } from '../../../styles/themes';
import Label from '../Label';

test('renders correctly', () => {
  const component = renderer.create(<Label theme={dayTheme} />);
  expect(component.toJSON()).toMatchSnapshot();
});
