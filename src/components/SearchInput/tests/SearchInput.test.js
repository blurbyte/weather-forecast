import React from 'react';
import renderer from 'react-test-renderer';
import SearchInput from '../index';

jest.mock('../Input', () => 'Input');

test('renders correctly', () => {
  const component = renderer.create(<SearchInput placeholder="Sweet child o' mine" />);
  expect(component.toJSON()).toMatchSnapshot();
});
