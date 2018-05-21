import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from './ListItem';
import CountryCode from './CountryCode';

const Caption = styled.p`
  padding: 0 1.2rem;
  margin: 0;
`;

const City = ({ name, country }) => (
  <ListItem>
    <Caption>
      {name} <CountryCode>{country}</CountryCode>
    </Caption>
  </ListItem>
);

City.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default City;
