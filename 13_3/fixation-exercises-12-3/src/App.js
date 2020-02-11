// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>

        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />

      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
