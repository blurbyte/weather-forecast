import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Overlay from '../Overlay';
jest.mock('react-dom', () => ({
  createPortal: jest.fn(element => element)
}));

test('renders correctly', () => {
  const component = renderer.create(<Overlay>Portal Test</Overlay>);
  expect(component.toJSON()).toMatchSnapshot();
});
