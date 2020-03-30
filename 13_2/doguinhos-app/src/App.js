import React from 'react';
import './App.css';
import Doguitchos from './component/Doguitchos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      casaDogs: false,
    }
  }

  criaDoguitchos = () => {
    this.setState((newState) => ({ casaDogs: !newState.casaDogs }));

  }

  render () {
    return (
      <div className="App">
        <button onClick={this.criaDoguitchos} type="button">
          {this.state.casaDogs ? 'Tamo junto!' : 'Clique para chamar a cachorreira'}
        </button>
        {this.state.casaDogs ? <Doguitchos /> : <p>No dog for you</p>}
      </div>
    );
  }
}

export default App;
