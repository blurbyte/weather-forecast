# Forecast

[![Build Status](https://travis-ci.org/blurbyte/weather-forecast.svg?branch=master)](https://travis-ci.org/blurbyte/weather-forecast)
[![codecov](https://codecov.io/gh/blurbyte/weather-forecast/branch/master/graph/badge.svg)](https://codecov.io/gh/blurbyte/weather-forecast)

### Five day weather forecast. With style.

Check out live app at [theforecast.surge.sh](https://theforecast.surge.sh) 🚀

Everything started with design (mockups available in _/mockups_ folder). App features handcrafted logo and icons 💅.

To start project in development mode run `npm start`. For production build run `npm run build` command. Test suite could be ran with `npm test`.

### Major technologies used:

* _create-react-app_
* _styled-components_ for styling
* _jest_ as automated testing suite
* _eslint, prettier_ for linting and code formatting
* _ramda_ to embrace fp style 🙂
* _travisci, codecov_ for CI and test coverage
* _surge_ for deployment

### Overview

App is fully responsive, features day / night theme and different layout and search menu for desktop, tablet and phone. Uses service worker to cache static assets and local storage to save last selected city.

How it looks on desktop / tablet:

![Desktop and Tablet layout](https://eloriel.blob.core.windows.net/images/forecast-desktop-and-tablet.png)

And on phone:

![Phone layout](https://eloriel.blob.core.windows.net/images/forecast-mobile.png)

Tested on newest Chrome, Firefox, Edge and Safari (iOS).

### Possible improvements
Ranked from least time consuming:

* support for geolocation
* heavy rain theme
* more tests (mainly for containers)
* display detailed present day forecast on nice d3 graph
* use TypeScript
* graphql layer for more efficient API responses
