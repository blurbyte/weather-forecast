// Fetch wrappers with baked in API strings and key (should be moved to .env lately)
// Data is normalized after fetch

import { normalizeCurrentWeather, normalizeFiveDayForecast, normalizeCities } from '../utils';

const API_KEY = '980482225333edda41920c0a2806ba63';

export function getCurrentWeather(cityId) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(data => normalizeCurrentWeather(data));
}

export function getFiveDayForecast(cityId) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(data => normalizeFiveDayForecast(Date.now(), data.list));
}

export function getCities(search) {
  const encodedSearch = encodeURIComponent(search);
  return fetch(
    `http://api.openweathermap.org/data/2.5/find?q=${encodedSearch}&mode=json&type=like&sort=population&APPID=${API_KEY}`
  )
    .then(res => res.json())
    .then(data => normalizeCities(data.list));
}
