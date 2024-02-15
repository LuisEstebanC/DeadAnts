const DeadAnts = require('./app');

test('Throw an error is the input is different a string', () => {
  expect(()=>DeadAnts(4)).toThrow('You must provide a string');
});

test('Throw an error is the input is a blank space', () => {
    expect(()=>DeadAnts('')).toThrow('The input cant be empty');
  });
  test('Throw an error is the input is null or undefined', () => {
    expect(()=>DeadAnts(null)).toThrow('The input cant be null or undefined');
  });