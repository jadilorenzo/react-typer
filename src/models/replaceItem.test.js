import replaceItem from './replaceItem'

it('replaces item in an array', () => {
  const a = [1, 2, 3, 4]
  expect(replaceItem(1, '2', a)).toStrictEqual([1, '2', 3, 4])
});
