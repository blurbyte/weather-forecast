import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Logo } from '../Icons';
import CloseButton from './CloseButton';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #222222;
  color: #ffffff;
  height: 6rem;
  padding: 0 2rem;
`;

const TopBar = ({ onClose }) => (
  <Wrapper onClick={onClose}>
    <Logo />
    <CloseButton />
  </Wrapper>
);

TopBar.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default TopBar;
