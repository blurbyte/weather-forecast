// Removes all irrelevant properties

import map from 'ramda/src/map';
import uniqBy from 'ramda/src/uniqBy';
import compose from 'ramda/src/compose';

const transformCity = city => ({
  cityId: city.id,
  name: city.name,
  country: city.sys.country
});

// API tends to response with duplicated records
const uniqueCities = uniqBy(city => city.cityId);

const normalizeCities = compose(uniqueCities, map(transformCity));

export default normalizeCities;
