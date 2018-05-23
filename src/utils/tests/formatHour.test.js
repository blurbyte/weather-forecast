import formatHour from '../formatHour';
import moment from 'moment-timezone';

test('formatHour() displays proper hour when date is provided', () => {
  expect(formatHour(moment('2018-05-19T18:00:00'))).toEqual('18:00');
});
