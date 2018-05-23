import styled from 'styled-components';

import BaseInput from '../Input';
import Icon from './Icon';

const Input = styled(BaseInput)`
  &:focus {
    width: 36rem;
  }

  padding-right: 4.4rem;

  & + ${Icon} {
    color: ${props => props.theme.primary};
  }

  &:focus + ${Icon} {
    color: #222;
  }
`;

export default Input;
