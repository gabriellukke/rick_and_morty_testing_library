import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav>
      <Link to="/characters">Personagens</Link>
      <Link to="/locations">Locais</Link>
      <Link to="/episodes">Episódios</Link>
    </nav>
  );
}

export default Home;
