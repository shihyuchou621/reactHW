import {
  add,
  double,
  triple,
} from './utils';

test('should add 1 and 2, toBe 3', () => {
  expect(add(1,2)).toBe(3);
});

test('should double 3, toBe 9', () => {
  expect(double(3)).toBe(9);
});

test('should triple 4, toBe 64', () => {
  expect(triple(4)).toBe(64);
});
