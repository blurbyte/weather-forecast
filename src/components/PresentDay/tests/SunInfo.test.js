import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment-timezone';

import SunInfo from '../SunInfo';

jest.mock('../Label', () => 'Label');

test('renders correctly', () => {
  const props = {
    sunrise: moment('2018-05-19T06:02:00').format(),
    sunset: moment('2018-05-19T20:54:00').format()
  };

  const component = renderer.create(<SunInfo {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
