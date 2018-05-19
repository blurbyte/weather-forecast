import removeDecimals from '../removeDecimals';

test('removeDecimals() removes decimals', () => {
  expect(removeDecimals(16.456)).toEqual('16');
  expect(removeDecimals(-2.17)).toEqual('-2');
});
