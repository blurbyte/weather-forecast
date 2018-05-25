import React from 'react';

import Hitbox from '../Hitbox';
import { CrossMark } from '../Icons';

const CloseButton = props => (
  <Hitbox {...props} aria-label="Close">
    <CrossMark />
  </Hitbox>
);

export default CloseButton;
