import normalizeCurrentWeather from '../normalizeCurrentWeather';

test('normalizeCurrentWeather() maps api response to simpler structure', () => {
  const initialData = {
    base: 'stations',
    name: 'London',
    clouds: {
      all: 0
    },
    dt: 1526732400,
    main: {
      temp: 18.1,
      pressure: 1024,
      humidity: 45
    },
    sys: {
      type: 1,
      id: 5091,
      sunrise: 1526702551,
      sunset: 1526759546
    },
    visibility: 10000,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    wind: {
      speed: 2.6,
      deg: 40
    }
  };

  const expectedData = {
    temp: 18.1,
    wind: 2.6,
    humidity: 45,
    pressure: 1024,
    weatherId: 800,
    description: 'clear sky',
    sunrise: 1526702551,
    sunset: 1526759546,
    name: 'London'
  };

  expect(normalizeCurrentWeather(initialData)).toEqual(expectedData);
});
