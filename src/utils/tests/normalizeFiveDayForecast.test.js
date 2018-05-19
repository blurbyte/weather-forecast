import {
  noProvidedDay,
  fourDays,
  groupByDaytime,
  highestTemperature,
  lowestTemperature,
  transformDay,
  normalizeFiveDayForecast
} from '../normalizeFiveDayForecast';

test('noSingleDay() removes all entries of provided day from a list', () => {
  const initialData = [
    {
      dt: 1526720400,
      main: {
        temp: 19.1
      }
    },
    {
      dt: 1526763600,
      main: {
        temp: 12.35
      }
    },
    {
      dt: 1526806800,
      main: {
        temp: 17.4
      }
    }
  ];

  const expectedData = [
    {
      dt: 1526806800,
      main: {
        temp: 17.4
      }
    }
  ];

  expect(noProvidedDay('2018-05-19T06:57:29+00:00')(initialData)).toEqual(expectedData);
});

test('fourDays() limits number of records to four days', () => {
  const initialData = [
    {
      dt: 1526720400,
      main: {
        temp: 19.1
      }
    },
    {
      dt: 1526763600,
      main: {
        temp: 12.35
      }
    },
    {
      dt: 1526806800,
      main: {
        temp: 17.4
      }
    },
    {
      dt: 1526763600,
      main: {
        temp: 12.35
      }
    },
    {
      dt: 1526806800,
      main: {
        temp: 17.4
      }
    }
  ];

  const expectedData = [
    {
      dt: 1526720400,
      main: {
        temp: 19.1
      }
    },
    {
      dt: 1526763600,
      main: {
        temp: 12.35
      }
    },
    {
      dt: 1526806800,
      main: {
        temp: 17.4
      }
    },
    {
      dt: 1526763600,
      main: {
        temp: 12.35
      }
    }
  ];

  expect(fourDays(1)(initialData)).toEqual(expectedData);
});

test('groupByDaytime() groups forecast by day', () => {
  const initialData = [
    {
      dt: 1526720400,
      main: {
        temp: 19.1
      }
    },
    {
      dt: 1526763600,
      main: {
        temp: 12.35
      }
    },
    {
      dt: 1526806800,
      main: {
        temp: 17.4
      }
    },
    {
      dt: 1526850000,
      main: {
        temp: 11.8
      }
    }
  ];

  const expectedData = {
    '5/19/2018': [
      {
        dt: 1526720400,
        main: {
          temp: 19.1
        }
      },
      {
        dt: 1526763600,
        main: {
          temp: 12.35
        }
      }
    ],
    '5/20/2018': [
      {
        dt: 1526806800,
        main: {
          temp: 17.4
        }
      },
      {
        dt: 1526850000,
        main: {
          temp: 11.8
        }
      }
    ]
  };

  expect(groupByDaytime(initialData)).toEqual(expectedData);
});

test('highestTemperature() gets highest temperature from provided records', () => {
  const initialData = [
    {
      dt: 1526720400,
      main: {
        temp: 18.44
      }
    },
    {
      dt: 1526763600,
      main: {
        temp: 19.1
      }
    },
    {
      dt: 1526806800,
      main: {
        temp: 17.4
      }
    }
  ];

  expect(highestTemperature(initialData)).toEqual(19.1);
});

test('lowestTemperature() gets lowest temperature from provided records', () => {
  const initialData = [
    {
      dt: 1526720400,
      main: {
        temp: 18.44
      }
    },
    {
      dt: 1526763600,
      main: {
        temp: 19.1
      }
    },
    {
      dt: 1526806800,
      main: {
        temp: 17.4
      }
    }
  ];

  expect(lowestTemperature(initialData)).toEqual(17.4);
});

test('transformDay() flattens single day and leave only relevant data', () => {
  const initialData = [
    {
      clouds: {
        all: 0
      },
      dt: 1526720400,
      main: {
        temp: 16.1,
        pressure: 1030.87,
        humidity: 61
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      clouds: {
        all: 0
      },
      dt: 1526763600,
      main: {
        temp: 13.39,
        pressure: 1029.36,
        humidity: 47
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    }
  ];

  const expectedData = {
    id: 800,
    description: 'clear sky',
    tempMax: 16.1,
    tempMin: 13.39
  };

  expect(transformDay(initialData)).toEqual(expectedData);
});

test('normalizeFiveDayForecast() normalizes fetched five day forecast', () => {
  const initialData = {
    city: {
      id: 2643743,
      name: 'London'
    },
    cnt: 6,
    list: [
      {
        clouds: {
          all: 0
        },
        dt: 1526720400,
        dt_txt: '2018-05-19 09:00:00',
        main: {
          temp: 16.1,
          pressure: 1030.87,
          humidity: 61
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ]
      },
      {
        clouds: {
          all: 0
        },
        dt: 1526763600,
        dt_txt: '2018-05-19 21:00:00',
        main: {
          temp: 13.39,
          pressure: 1029.36,
          humidity: 47
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ]
      },
      {
        clouds: {
          all: 0
        },
        dt: 1526806800,
        dt_txt: '2018-05-20 09:00:00',
        main: {
          temp: 18.45,
          pressure: 1039.12,
          humidity: 45
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ]
      },
      {
        clouds: {
          all: 0
        },
        dt: 1526850000,
        dt_txt: '2018-05-20 21:00:00',
        main: {
          temp: 10.3,
          pressure: 1021.87,
          humidity: 48
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ]
      },
      {
        clouds: {
          all: 0
        },
        dt: 1526893200,
        dt_txt: '2018-05-21 09:00:00',
        main: {
          temp: 19.45,
          pressure: 1025.12,
          humidity: 67
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '01d'
          }
        ]
      },
      {
        clouds: {
          all: 0
        },
        dt: 1526936400,
        dt_txt: '2018-05-21 21:00:00',
        main: {
          temp: 15.99,
          pressure: 1021.87,
          humidity: 63
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '02n'
          }
        ]
      }
    ]
  };

  const normalizedData = {
    '5/20/2018': {
      id: 800,
      description: 'clear sky',
      tempMin: 10.3,
      tempMax: 18.45
    },
    '5/21/2018': {
      id: 801,
      description: 'few clouds',
      tempMin: 15.99,
      tempMax: 19.45
    }
  };

  expect(normalizeFiveDayForecast('2018-05-19T06:57:29+00:00', initialData.list)).toEqual(normalizedData);
});
