import React from 'react';
import { render, cleanup, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from ".";

afterEach(cleanup);

const mockFetch = (data) =>
  jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  );

global.fetch = mockFetch({
  count: 1050,
  next: "https://pokeapi.co/api/v2/pokemon/?offset=3&limit=3",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
  ],
});

test('should fetch data and get pokemon', async () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId("input"), 'bulb');

  await wait(() => {
    expect(getByTestId("bulbasaur")).toHaveTextContent("bulbasaur");
    expect(container).toMatchSnapshot();
  });
});

