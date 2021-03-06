import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW from '.';

afterEach(cleanup);

test('mm should change correctly ', () => {
  const { container } = render(<HW />);
  fireEvent.change(
    container.querySelector('input[name="mm"]'),
    { target: { value: '3000' } }
  );
  expect(container.querySelector('input[name="cm"]').value).toBe('300');
  expect(container.querySelector('input[name="m"]').value).toBe('3');
  expect(container.querySelector('input[name="km"]').value).toBe('0.003');
});

test('cm should change correctly ', () => {
  const { container } = render(<HW />);
  fireEvent.change(
    container.querySelector('input[name="cm"]'),
    { target: { value: '7200' } }
  );
  expect(container.querySelector('input[name="mm"]').value).toBe('72000');
  expect(container.querySelector('input[name="m"]').value).toBe('72');
  expect(container.querySelector('input[name="km"]').value).toBe('0.072');
});

test('m should change correctly ', () => {
  const { container } = render(<HW />);
  fireEvent.change(
    container.querySelector('input[name="m"]'),
    { target: { value: '25' } }
  );
  expect(container.querySelector('input[name="mm"]').value).toBe('25000');
  expect(container.querySelector('input[name="cm"]').value).toBe('2500');
  expect(container.querySelector('input[name="km"]').value).toBe('0.025');
});

test('km should change correctly ', () => {
  const { container } = render(<HW />);
  fireEvent.change(
    container.querySelector('input[name="km"]'),
    { target: { value: '600' } }
  );
  expect(container.querySelector('input[name="mm"]').value).toBe('600000000');
  expect(container.querySelector('input[name="cm"]').value).toBe('60000000');
  expect(container.querySelector('input[name="m"]').value).toBe('600000');
});
