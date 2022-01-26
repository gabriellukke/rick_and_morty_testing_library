import React, { Component } from 'react';

import fetchAPI from '../services/api';
import { CHARACTERS } from '../services/endpoints';

import Card from '../components/Card';

class Characters extends Component {
  constructor() {
    super();

    this.state = {
      loadingAPI: true,
      characters: [],
    };

    this.getCharacters = this.getCharacters.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  async getCharacters() {
    const { results: characters } = await fetchAPI(CHARACTERS);

    this.setState({ characters, loadingAPI: false });
  }

  deleteCharacter(characterToDelete) {
    function filterComparison(comparison) {
      return comparison.id !== characterToDelete.id;
    }

    this.setState((prevState) => ({
      characters: prevState.characters.filter(filterComparison),
    }));
  }

  render() {
    const { characters, loadingAPI } = this.state;
    const { history } = this.props;
    if (loadingAPI) return <h1>Carregando...</h1>;
    return (
      <ul className="listCard">
        {characters.map((character) => (
          <Card
            key={ character.id }
            data={ character }
            type="character"
            history={ history }
            deleteCard={ () => this.deleteCharacter(character) }
          />
        ))}
      </ul>
    );
  }
}

export default Characters;
