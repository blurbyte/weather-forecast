import styled from 'styled-components';

import BaseInput from '../Input';
import Icon from './Icon';

const Input = styled(BaseInput)`
  padding-right: 4.4rem;

  & + ${Icon} {
    color: ${props => props.theme.primary};
  }

  &:focus + ${Icon} {
    color: #222;
  }
`;

export default Input;
