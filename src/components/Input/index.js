import styled from 'styled-components';
import { transparentize } from 'polished';

const Input = styled.input`
  color: ${props => props.theme.primary};
  width: 28rem;
  height: 4rem;
  border: 1px solid transparent;
  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0 1.2rem;
  font-size: 1.4rem;
  outline: 0;
  transition: all 0.3s;

  &::-ms-clear {
    display: none;
  }

  &:focus {
    width: 36rem;
    border: 1px solid #222222;
    background-color: #ffffff;
    color: #222222;
  }

  &:focus::placeholder {
    color: ${transparentize(0.5, '#222222')};
  }

  &::placeholder {
    color: ${props => transparentize(0.5, props.theme.primary)};
  }
`;

export default Input;
