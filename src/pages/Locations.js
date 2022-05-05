import React, { useState, useEffect } from 'react';

import fetchAPI from '../services/api';
import { LOCATIONS } from '../services/endpoints';

import Card from '../components/Card';

function Locations() {
  const [locations, setLocations] = useState([]);
  const [loadingAPI, setLoadingAPI] = useState(true);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const { results: locations } = await fetchAPI(LOCATIONS);

    setLocations(locations);
    setLoadingAPI(false);
  }

  if (loadingAPI) return <h1>Carregando...</h1>;
  return (
    <ul className="listCard">
      {locations.map((location) => (
        <Card key={ location.id } data={ location } type="location" />
      ))}
    </ul>
  );
}

export default Locations;
