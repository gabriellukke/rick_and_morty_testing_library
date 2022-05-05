import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import fetchAPI from '../services/api';
import { CHARACTERS } from '../services/endpoints';

import Card from '../components/Card';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loadingAPI, setLoadingAPI] = useState(true);

  const history = useHistory();

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const { results: characters } = await fetchAPI(CHARACTERS);

    setCharacters(characters);
    setLoadingAPI(false);
  }

  const deleteCharacter = (characterToDelete) => {
    function filterComparison(comparison) {
      return comparison.id !== characterToDelete.id;
    }
    setCharacters((prevState) => prevState.filter(filterComparison));
  }

  if (loadingAPI) return <h1>Carregando...</h1>;

  return (
    <ul className="listCard">
      {characters.map((character) => (
        <Card
          key={ character.id }
          data={ character }
          type="character"
          history={ history }
          deleteCard={ () => deleteCharacter(character) }
        />
      ))}
    </ul>
  );
}

export default Characters;
