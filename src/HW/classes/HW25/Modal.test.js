import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import Modal from './Modal';

afterEach(cleanup);

test('Modal', () => {
  const onClose = jest.fn();
  const { container, getByText, getByTestId } = render(
    <Modal
      name="Modal"
      position="center"
      onClose={onClose}
    >lorem</Modal>
  );

  fireEvent.click(getByText("關閉"));
  expect(onClose.mock.calls.length).toBe(1);
  expect(getByTestId("content").innerHTML).toBe("lorem");
  expect(container).toMatchSnapshot();
});

test('top', () => {
  const onClose = jest.fn();
  const { container, getByText, getByTestId } = render(
    <Modal
      name="top"
      position="top"
      onClose={onClose}
    >lorem</Modal>
  );

  fireEvent.click(getByText("關閉"));
  expect(onClose.mock.calls.length).toBe(1);
  expect(getByTestId("content").innerHTML).toBe("lorem");
  expect(container).toMatchSnapshot();
});

test('header', () => {
  const onClose = jest.fn();
  const { container, getByText, getByTestId } = render(
    <Modal
      name="header"
      position="center"
      onClose={onClose}
    >lorem</Modal>
  );

  fireEvent.click(getByText("關閉"));
  expect(onClose.mock.calls.length).toBe(1);
  expect(getByTestId("content").innerHTML).toBe("lorem");
  expect(container).toMatchSnapshot();
});

test('top + animation', () => {
  const onClose = jest.fn();
  const { container, getByText, getByTestId } = render(
    <Modal
      name="top + animation"
      isAnimation={true}
      onClose={onClose}
    >lorem</Modal>
  );

  fireEvent.click(getByText("關閉"));
  expect(onClose.mock.calls.length).toBe(1);
  expect(getByTestId("content").innerHTML).toBe("lorem");
  expect(container).toMatchSnapshot();
});
