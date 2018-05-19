import compose from 'ramda/src/compose';
import filter from 'ramda/src/filter';
import slice from 'ramda/src/slice';
import groupBy from 'ramda/src/groupBy';
import map from 'ramda/src/map';
import reduce from 'ramda/src/reduce';
import curry from 'ramda/src/curry';

import shortDate from './shortDate';

// Removes entries with provided day
// Since current weather is get with another api call
// Used mainly with present day timestamp
export const noProvidedDay = curry((timestamp, days) =>
  filter(day => shortDate(day.dt * 1000) > shortDate(timestamp), days)
);

// Limits number of entries to four days only
export const fourDays = curry((entriesByDay, days) => slice(0, 4 * entriesByDay, days));

// Groups list of daily forecasts by date
export const groupByDaytime = groupBy(day => shortDate(day.dt * 1000));

// Gets highest temperature from hour based day forecast
export const highestTemperature = day =>
  reduce(
    (temperature, entry) => (entry.main.temp > temperature ? entry.main.temp : temperature),
    day[0].main.temp,
    day
  );

// Gets lowest temperature from hour based day forecast
export const lowestTemperature = day =>
  reduce(
    (temperature, entry) => (entry.main.temp < temperature ? entry.main.temp : temperature),
    day[0].main.temp,
    day
  );

// Removes all not relevent data
// Gets weather id and description beased on first entry of the given day
export const transformDay = day => ({
  weatherId: day[0].weather[0].id,
  description: day[0].weather[0].description,
  tempMax: highestTemperature(day),
  tempMin: lowestTemperature(day)
});

// Greatly simplifies whole five day forecast data structure
// Accepts timestamp and list days
const normalizeFiveDayForecast = compose(map(transformDay), groupByDaytime, fourDays(8), noProvidedDay);

export default normalizeFiveDayForecast;
