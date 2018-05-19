import shortDate from '../shortDate';

test('converts unix date format to shortened date', () => {
  expect(shortDate(1526720400 * 1000)).toEqual('5/19/2018');
});

test('converts ISO date format to shortened date', () => {
  expect(shortDate('2018-05-19T06:57:29+00:00')).toEqual('5/19/2018');
});
