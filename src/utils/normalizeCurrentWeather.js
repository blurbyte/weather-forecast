// Mapping to simpler sturcture with only relevent data

const normalizeCurrentWeather = currentWeather => ({
  temp: currentWeather.main.temp,
  wind: currentWeather.wind.speed,
  humidity: currentWeather.main.humidity,
  pressure: currentWeather.main.pressure,
  weatherId: currentWeather.weather[0].id,
  description: currentWeather.weather[0].description,
  sunrise: currentWeather.sys.sunrise,
  sunset: currentWeather.sys.sunset
});

export default normalizeCurrentWeather;
