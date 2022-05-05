import React, { Component } from 'react';
import Button from './Button';

function Card({ data, type, history, deleteCard }) {
  return (
    <>
      {type === 'character' && (
        <li className="card">
          <h3>{ data.name }</h3>
          <img src={ data.image } alt={ data.name } />
          <p>{data.species}</p>
          <p>{data.status}</p>
          <Button onMyClick={ () => history.push(`/character/${data.id}`) }>
            Ver mais
          </Button>
          <Button onMyClick={ deleteCard }>Deletar personagem</Button>
        </li>
      )}
      {type === 'location' && (
        <li className="card">
          <h3>{ data.name }</h3>
          <p>{`Dimension: ${data.dimension}`}</p>
          <p>
            {`Type: ${data.type}`}
          </p>
        </li>
      )}
      {type === 'episode' && (
        <li className="card">
          <h3>{ data.name }</h3>
          <p>{`Air Date: ${data.air_date}`}</p>
          <p>
            {`Episode: ${data.episode}`}
          </p>
        </li>
      )}
    </>
  );
}

export default Card;
