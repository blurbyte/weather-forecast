import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import TopBar from '../TopBar';

jest.mock('../../Icons', () => ({
  Logo: 'Logo'
}));

jest.mock('../CloseButton', () => 'CloseButton');

test('renders correctly', () => {
  const component = renderer.create(<TopBar onClose={jest.fn()} />);
  expect(component.toJSON()).toMatchSnapshot();
});
