const API_KEY = '980482225333edda41920c0a2806ba63';

export function getCurrentWeather(city) {
  const encodedCityName = encodeURIComponent(city);
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${encodedCityName}&units=metric&APPID=${API_KEY}`
  ).then(res => res.json());
}

export function getFiveDayForecast(city) {
  const encodedCityName = encodeURIComponent(city);
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${encodedCityName}&units=metric&APPID=${API_KEY}`
  ).then(res => res.json());
}
