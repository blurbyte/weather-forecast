// Generates media templates based on device breakpoints

import { css } from 'styled-components';

// Devices breakpoints
export const devices = {
  desktop: 1000,
  tablet: 640,
  phone: 420
};

const media = Object.keys(devices).reduce((acc, label) => {
  acc[label] = (strings, ...interpolations) => css`
    @media (max-width: ${devices[label] / 16}em) {
      ${css(strings, ...interpolations)};
    }
  `;
  return acc;
}, {});

export default media;
