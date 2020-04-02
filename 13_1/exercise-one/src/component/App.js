import React from 'react';
import Botao from './Botao';
import '../App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Botao arrayItems={['Felipe', 'Andrey', 'Fernando', 'Johnatas']}></Botao>
      </div>
    );
  }
}
export default App;
