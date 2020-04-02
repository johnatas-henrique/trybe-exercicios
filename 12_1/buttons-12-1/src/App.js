import React from 'react';
import './App.css';

class Resposta extends React.Component {

  render() {
    return (
      <p>Sua resposta é: {this.props.estado}</p>
    );
  }
}

class Botao extends React.Component {

  render() {
    return (
      <button type="button" 
      onClick={this.props.handleclick} value={this.props.valor}>
        {this.props.valor}</button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btnvalue: '',
    };
  }
  
  setValue = event => {
    this.setState({btnvalue: event.target.value}, () => {
    })
  };
  
  render () {
    return (
      <div className="App">
        <div>
          <Resposta estado={this.state.btnvalue} />
          <Botao handleclick={this.setValue} valor="Botão 1" />
          <Botao handleclick={this.setValue} valor="Botão 2" />
          <Botao handleclick={this.setValue} valor="Botão 3" />
        </div>
      </div>
    );
  }
}

export default App;
