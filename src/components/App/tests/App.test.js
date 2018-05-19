import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

jest.mock('../../Forecast', () => 'Forecast');

test('renders correctly', () => {
  const component = renderer.create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
