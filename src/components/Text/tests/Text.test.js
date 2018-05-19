import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dayTheme } from '../../../styles/themes';
import Text from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Text theme={dayTheme} />);
  expect(component.toJSON()).toMatchSnapshot();
});
