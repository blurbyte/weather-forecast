// Fetch wrappers with baked in API strings and key (should be moved to .env lately)
// Data is normalized after fetch

import normalizeCurrentWeather from '../utils/normalizeCurrentWeather';
import normalizeFiveDayForecast from '../utils/normalizeFiveDayForecast';

const API_KEY = '980482225333edda41920c0a2806ba63';

export function getCurrentWeather(city) {
  const encodedCityName = encodeURIComponent(city);
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${encodedCityName}&units=metric&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(data => normalizeCurrentWeather(data));
}

export function getFiveDayForecast(city) {
  const encodedCityName = encodeURIComponent(city);
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${encodedCityName}&units=metric&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(data => normalizeFiveDayForecast(Date.now(), data.list));
}
