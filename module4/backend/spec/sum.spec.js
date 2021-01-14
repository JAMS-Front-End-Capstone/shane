const target = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(target.sum(1, 2)).toBe(3);
});
