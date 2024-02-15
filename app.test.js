const printHello = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(printHello()).toBe('hello');
});