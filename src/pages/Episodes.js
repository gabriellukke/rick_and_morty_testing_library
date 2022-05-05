import React, { useState, useEffect } from 'react';

import fetchAPI from '../services/api';
import { EPISODES } from '../services/endpoints';

import Card from '../components/Card';

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loadingAPI, setLoadingAPI] = useState(true);

  useEffect(() => {
    getEpisodes();
  }, []);

  const getEpisodes = async () => {
    const { results: episodes } = await fetchAPI(EPISODES);

    setEpisodes(episodes);
    setLoadingAPI(false);
  }

  if (loadingAPI) return <h1>Carregando...</h1>;

  return (
    <ul className="listCard">
      {episodes.map((location) => (
        <Card key={ location.id } data={ location } type="episode" />
      ))}
    </ul>
  );
}

export default Episodes;
