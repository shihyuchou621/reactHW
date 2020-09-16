import isInterger from './isInterger';

test('should 1.1 toBe false', () => {
  expect(isInterger(1.1)).toBe(false);
});

test('should 1 toBe true', () => {
  expect(isInterger(1)).toBe(true);
});
