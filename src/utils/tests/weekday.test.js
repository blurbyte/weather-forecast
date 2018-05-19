import weekday from '../weekday';

test('displays weekday of unix date', () => {
  expect(weekday(1526720400 * 1000)).toEqual('Saturday');
});

test('displays weekday of ISO date', () => {
  expect(weekday('2018-05-19T06:57:29+00:00')).toEqual('Saturday');
});
