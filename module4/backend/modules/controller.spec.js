const target = require('./controller');

test('says hello', () => {
  expect(target.hello()).toBe('hello');
});
