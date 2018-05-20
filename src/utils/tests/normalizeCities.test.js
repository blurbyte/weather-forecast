import normalizeCities from '../normalizeCities';

test('normalizeCities() simplifies API response structure', () => {
  const initialData = {
    message: 'like',
    count: 2,
    list: [
      {
        id: 2643743,
        name: 'London',
        coord: {
          lat: 51.5073,
          lon: -0.1277
        },
        main: {
          temp: 16.5
        },
        dt: 1526842200,
        wind: {
          speed: 6.2,
          deg: 100
        },
        sys: {
          country: 'GB'
        }
      },
      {
        id: 6058560,
        name: 'London',
        coord: {
          lat: 42.9886,
          lon: -81.2467
        },
        main: {
          temp: 28.4
        },
        dt: 1526839200,
        wind: {
          speed: 4.2,
          deg: 330
        },
        sys: {
          country: 'CA'
        }
      }
    ]
  };

  const expectedData = [
    {
      cityId: 2643743,
      name: 'London',
      country: 'GB'
    },
    {
      cityId: 6058560,
      name: 'London',
      country: 'CA'
    }
  ];

  expect(normalizeCities(initialData.list)).toEqual(expectedData);
});
