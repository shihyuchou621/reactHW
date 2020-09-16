import sum from './sum';

test('should 1+2=3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should 5+123=128', () => {
  expect(sum(5, 123)).toBe(128);
});

