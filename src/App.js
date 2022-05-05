import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route path="/" component={ Home } />
        <Switch>
          <Route path="/characters" component={ Characters } />
          <Route path="/character/:id" component={ Character } />
          <Route path="/locations" component={ Locations } />
          <Route path="/episodes" component={ Episodes } />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
