const DeadAnts = require('./app');

test('Throw an error is the input is different a string', () => {
  expect(()=>DeadAnts(4)).toThrow('You must provide a string');
});
