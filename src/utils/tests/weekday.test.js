import weekday from '../weekday';
import moment from 'moment-timezone';

test('displays weekday of ISO date', () => {
  expect(weekday(moment('2018-05-19T18:00:00').format())).toEqual('Saturday');
});
