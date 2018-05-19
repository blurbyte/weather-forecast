import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { dayTheme } from '../../../styles/themes';
import Footer from '../index';

test('renders correctly', () => {
  const component = renderer.create(
    <ThemeProvider theme={dayTheme}>
      <Footer />
    </ThemeProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
