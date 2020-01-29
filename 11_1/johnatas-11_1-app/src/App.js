import React from 'react';
//import logo from './logo.svg';
import './App.css';
const arrayReact1 = ['Felipe', 'Fernando', 'Johnatas'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ul>
        {arrayReact1.map((item, index) => (
          <li key={index}>Passei o item da posição {index}, com valor de {item}</li>
        ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
