import React from 'react';

import { Magnifier } from '../Icons';
import Wrapper from './Wrapper';
import Input from './Input';
import Icon from './Icon';

const SearchInput = props => (
  <Wrapper>
    <Input type="search" autoCapitalize="off" spellCheck="false" autoCorrect="off" autoComplete="off" {...props} />
    <Icon>
      <Magnifier />
    </Icon>
  </Wrapper>
);

export default SearchInput;
