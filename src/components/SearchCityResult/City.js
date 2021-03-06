import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CountryCode from './CountryCode';

const Caption = styled.p`
  padding: 0 1.2rem;
  margin: 0;
`;

const City = ({ cityId, name, country, fetchForecast, listItem: InjectedListItem }) => (
  <InjectedListItem onMouseDown={() => fetchForecast(cityId)}>
    <Caption>
      {name} <CountryCode>{country}</CountryCode>
    </Caption>
  </InjectedListItem>
);

City.propTypes = {
  cityId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  fetchForecast: PropTypes.func.isRequired,
  listItem: PropTypes.func.isRequired
};

export default City;
