// Form hidden on tablets or smaller devices

import styled from 'styled-components';

import media from '../../styles/media';

const Form = styled.form`
  position: relative;

  ${media.tablet`
    display: none;
  `};
`;

export default Form;
