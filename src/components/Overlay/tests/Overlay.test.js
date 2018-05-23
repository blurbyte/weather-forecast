import React from 'react';
import renderer from 'react-test-renderer';

import Overlay from '../index';
jest.mock('react-dom', () => ({
  createPortal: jest.fn(element => element)
}));

test('renders correctly', () => {
  const component = renderer.create(<Overlay>Portal Test</Overlay>);
  expect(component.toJSON()).toMatchSnapshot();
});
