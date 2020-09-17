import React from 'react';

import {
  // getByLabelText,
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW from './HW7';

afterEach(cleanup); // 跑完每個test之後都要執行cleanup(把測試完的component清空，避免後面的測試受到前面的影響)

global.fetch = jest.fn(() => {
  return Promise.resolve({ // 有then就要用promise
    json: () => Promise.resolve({
      "results": [
        {
          "gender": "male",
          "name": {
            "title": "Mr",
            "first": "Kirk",
            "last": "Griffin"
          },
          "location": {
            "street": {
              "number": 9585,
              "name": "Spring St"
            },
            "city": "Lubbock",
            "state": "North Dakota",
            "country": "United States",
            "postcode": 33950,
            "coordinates": {
              "latitude": "80.0986",
              "longitude": "-88.5421"
            },
            "timezone": {
              "offset": "+4:30",
              "description": "Kabul"
            }
          },
          "email": "kirk.griffin@example.com",
          "login": {
            "uuid": "95afc8a4-f5a7-45f0-935d-849b2cbcdafa",
            "username": "goldenswan568",
            "password": "camaro",
            "salt": "8uNDv7bI",
            "md5": "695e224bba7312b9ec0584129642b310",
            "sha1": "526451399d9ef14b07fd85a965b500fd3345e91b",
            "sha256": "0a3a795729b475f9a41ad2743a574e668f9a8ec542bcb9ef9e45248a2a1f8eab"
          },
          "dob": {
            "date": "1960-01-30T18:04:31.308Z",
            "age": 60
          },
          "registered": {
            "date": "2012-10-03T19:21:11.222Z",
            "age": 8
          },
          "phone": "(187)-786-9618",
          "cell": "(967)-385-6831",
          "id": {
            "name": "SSN",
            "value": "214-25-1623"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/69.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
          },
          "nat": "US"
        }
      ]
    })
  });
});

test('should fetch data', () => {
  const { getByTestId, getByText, container } = render(<HW />); // 此處的render: 把測試的component掛到一個虛擬的div上
  // const DOM = container;
  expect(global.fetch.mock.calls.length).toBe(1);

  // click action....

});
