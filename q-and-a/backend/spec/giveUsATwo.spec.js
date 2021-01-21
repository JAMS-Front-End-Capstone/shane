const { default: giveUsATwo } = require('./giveUsATwo');
const target = require('./giveUsATwo');

test('returns a 2', () => {
  expect(target.giveUsATwo()).toBe(2);
});
