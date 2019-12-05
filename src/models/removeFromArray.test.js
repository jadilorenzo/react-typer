import removeFromArray from './removeFromArray'

it('removes item from an array', () => {
  const a = [1, 2, 3, 4]
  expect(removeFromArray(1, a)).toStrictEqual([1, 3, 4])
});
