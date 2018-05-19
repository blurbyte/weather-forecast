import isDaytime from '../isDaytime';

test('isDaytime() properly determines if it is a day', () => {
  expect(isDaytime(1526710800 * 1000, 1526768400 * 1000, 1526752800 * 1000)).toEqual(true);
});

test('isDaytime() properly determines if it is a night', () => {
  expect(isDaytime(1526710800 * 1000, 1526768400 * 1000, 1526770800 * 1000)).toEqual(false);
  expect(isDaytime(1526710800 * 1000, 1526768400 * 1000, 1526709600 * 1000)).toEqual(false);
});
