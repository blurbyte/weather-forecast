import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import InfoText from '../InfoText';

test('renders correctly', () => {
  const component = renderer.create(<InfoText />);
  expect(component.toJSON()).toMatchSnapshot();
});
