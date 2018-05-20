// Removes all irrelevant properties

import map from 'ramda/src/map';

const transformCity = city => ({
  cityId: city.id,
  name: city.name,
  country: city.sys.country
});

const normalizeCities = map(transformCity);

export default normalizeCities;
