import formatHour from '../formatHour';

test('formatHour() displays proper hour when date is provided', () => {
  expect(formatHour(1526745600 * 1000)).toEqual('18:00');
});
