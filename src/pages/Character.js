import React, { Component } from 'react';
import Button from '../components/Button';

import fetchAPI from '../services/api';
import { CHARACTERS } from '../services/endpoints';

class Character extends Component {
  constructor() {
    super();

    this.state = {
      character: null,
      loadingAPI: true,
    };

    this.getCharacter = this.getCharacter.bind(this);
  }

  componentDidMount() {
    this.getCharacter();
  }

  async getCharacter() {
    const { match: { params: { id } } } = this.props;
    const character = await fetchAPI(`${CHARACTERS}/${id}`);

    this.setState({ character, loadingAPI: false });
  }

  render() {
    const { character, loadingAPI } = this.state;
    const { history } = this.props;
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
}

export default Character;
