import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';

import fetchAPI from '../services/api';
import { CHARACTERS } from '../services/endpoints';

function Character(props) {
  const [character, setCharacter] = useState(null);
  const [loadingAPI, setLoadingAPI] = useState(true);

  const history = useHistory();

  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    const { match: { params: { id } } } = props;
    const character = await fetchAPI(`${CHARACTERS}/${id}`);

    setCharacter(character);
    setLoadingAPI(false);
  }

  if (loadingAPI) return <h1>Carregando...</h1>;

  return (
    <div className="character">
      {character && (
        <>
          <h3>{ character.name }</h3>
          <img src={ character.image } alt={ character.name } />
          <p>{`Specie: ${character.species}`}</p>
          <p>{`Status: ${character.status}`}</p>
          <p>{`Type: ${character.type}`}</p>
          <p>{`Gender: ${character.gender}`}</p>
          <p>{`Origin: ${character.origin.name}`}</p>
          <p>{`Location: ${character.location.name}`}</p>
        </>
      )}
      <Button onMyClick={ () => history.goBack() }>Voltar</Button>
    </div>
  );
}

export default Character;
