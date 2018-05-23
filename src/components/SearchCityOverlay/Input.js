import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'search',
  autoCapitalize: 'off',
  spellCheck: 'false',
  autoCorrect: 'off',
  autoComplete: 'off',
  autoFocus: true
})`
  width: 100%;
  height: 6rem;
  border: none;
  outline: none;
  border-bottom: 1px solid #222222;
  padding: 0 2rem;
  background: #ffffff;
  font-size: 1.8rem;
  color: #222222;

  &::placeholder {
    color: rgba(34, 34, 34, 0.5);
  }
`;

export default Input;
