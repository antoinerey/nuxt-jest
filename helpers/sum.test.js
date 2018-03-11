import sum from './sum'

test('it adds two numbers', () => {
  const actual = sum(1, 4)
  const expected = 5

  expect(actual).toBe(expected)
})
