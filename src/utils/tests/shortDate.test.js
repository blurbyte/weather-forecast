import shortDate from '../shortDate';
import moment from 'moment-timezone';

test('converts ISO date format to shortened date', () => {
  expect(shortDate(moment('2018-05-19T18:00:00').format())).toEqual('05/19/2018');
});
