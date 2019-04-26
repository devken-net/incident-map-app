const compare = (a, b) => {
  // eslint-disable-next-line no-prototype-builtins
  if (a.hasOwnProperty('delay') && b.hasOwnProperty('delay')) {
    return a.delay < b.delay ? 1 : -1;
  }
  return 0;
};

const sortIncidentsByDelay = (incidents) => {
  const items = incidents.slice();
  return items.sort(compare);
};

const setIncidentMagnitude = (items) => items.map((item) => {
  const incident = Object.assign({}, item);
  const incidentType = ['Unknown', 'Minor', 'Moderate', 'Major'];
  incident.magnitudeTxt = incidentType[incident.magnitude];
  return incident;
});

const setIncidentType = (items) => items.map((item) => {
  const incident = Object.assign({}, item);
  const incidentType = ['Traffic jam', 'Hazardous conditions', 'Lane closed'];
  incident.type = incidentType[incident.type - 1];
  return incident;
});

// eslint-disable-next-line arrow-body-style
export const getIncidents = () => {
  return fetch('/api/incidents', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => sortIncidentsByDelay(response))
    .then((response) => setIncidentMagnitude(response))
    .then((response) => setIncidentType(response))
    .catch((error) => {
      console.error(error);
    });
};
