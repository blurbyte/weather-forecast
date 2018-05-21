import delay from '../delay';

test('delay() delays by provied milliseconds', async () => {
  const start = Date.now();
  await delay(150);
  const afterDelay = Date.now() - start;
  // Allows some variance
  expect(afterDelay).toBeGreaterThanOrEqual(140);
  expect(afterDelay).toBeLessThan(160);
});
