import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dayTheme } from '../../../styles/themes';
import Content from '../Content';

test('renders correctly', () => {
  const component = renderer.create(<Content theme={dayTheme} />);
  expect(component.toJSON()).toMatchSnapshot();
});
