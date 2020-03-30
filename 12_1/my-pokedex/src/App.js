import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <div className="App w-80">
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
