import React, { Component } from 'react';

import fetchAPI from '../services/api';
import { LOCATIONS } from '../services/endpoints';

import Card from '../components/Card';

class Locations extends Component {
  constructor() {
    super();

    this.state = {
      loadingAPI: true,
      locations: [],
    };

    this.getLocations = this.getLocations.bind(this);
  }

  componentDidMount() {
    this.getLocations();
  }

  async getLocations() {
    const { results: locations } = await fetchAPI(LOCATIONS);

    this.setState({ locations, loadingAPI: false });
  }

  render() {
    const { locations, loadingAPI } = this.state;
    console.log(locations);
    if (loadingAPI) return <h1>Carregando...</h1>;
    return (
      <ul className="listCard">
        {locations.map((location) => (
          <Card key={ location.id } data={ location } type="location" />
        ))}
      </ul>
    );
  }
}

export default Locations;
