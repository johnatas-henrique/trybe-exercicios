import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './List';

class App extends Component {
  render(){
    return (
      <div>
        <Provider store={store}>
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;
