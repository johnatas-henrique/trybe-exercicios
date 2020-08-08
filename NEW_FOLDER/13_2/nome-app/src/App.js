import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber () {
    console.log(this.state.data);
    this.setState((state) => ({ data: this.state.data + 1 }));
  }

  render () {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends React.Component {

  componentDidMount () {
    alert('Componente montado');
  }

  shouldComponentUpdate (nextProps) {
    if (nextProps.myNumber % 3 === 0) {
      return true;
    }
    return false;
  }

  componentDidUpdate () {
    alert('Divisível por 3');
  }

  componentWillUnmount () {
    localStorage.setItem('myNumber', this.props.myNumber);
  }

  render () {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;

