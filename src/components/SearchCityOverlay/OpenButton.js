import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';
import BaseHitbox from '../Hitbox';
import { Magnifier } from '../Icons';

const Hitbox = styled(BaseHitbox)`
  color: ${props => props.theme.primary};
  display: none;

  ${media.tablet`
    display: flex;
  `};
`;

const OpenButton = props => (
  <Hitbox {...props} aria-label="Search">
    <Magnifier />
  </Hitbox>
);

export default OpenButton;
