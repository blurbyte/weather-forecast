import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dayTheme } from '../../../styles/themes';
import CityName from '../CityName';

test('renders correctly', () => {
  const component = renderer.create(<CityName theme={dayTheme} />);
  expect(component.toJSON()).toMatchSnapshot();
});
