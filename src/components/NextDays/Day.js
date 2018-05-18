import React from 'react';
import styled from 'styled-components';

import Text from '../Text';
import WeatherIcon from '../WeatherIcon';

const Wrapper = styled.li`
  margin-top: 2rem;
`;

const Info = styled.div`
  display: flex;
  margin-top: 0.4rem;
`;

const Temperatures = styled.div`
  margin-left: 2rem;
  margin-top: 0.2rem;
`;

const Temperature = styled(Text).attrs({
  big: true
})`
  line-height: 1.2;
`;

const Day = () => (
  <Wrapper>
    <Text big>Thursday</Text>
    <Info>
      <WeatherIcon small />
      <Temperatures>
        <Temperature>20</Temperature>
        <Temperature dimmed>14</Temperature>
      </Temperatures>
    </Info>
    <Text>Clear sky</Text>
  </Wrapper>
);

export default Day;
