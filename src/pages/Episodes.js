import React, { Component } from 'react';

import fetchAPI from '../services/api';
import { EPISODES } from '../services/endpoints';

import Card from '../components/Card';

class Episodes extends Component {
  constructor() {
    super();

    this.state = {
      loadingAPI: true,
      episodes: [],
    };

    this.getEpisodes = this.getEpisodes.bind(this);
  }

  componentDidMount() {
    this.getEpisodes();
  }

  async getEpisodes() {
    const { results: episodes } = await fetchAPI(EPISODES);

    this.setState({ episodes, loadingAPI: false });
  }

  render() {
    const { episodes, loadingAPI } = this.state;
    console.log(episodes);
    if (loadingAPI) return <h1>Carregando...</h1>;
    return (
      <ul className="listCard">
        {episodes.map((location) => (
          <Card key={ location.id } data={ location } type="episode" />
        ))}
      </ul>
    );
  }
}

export default Episodes;
