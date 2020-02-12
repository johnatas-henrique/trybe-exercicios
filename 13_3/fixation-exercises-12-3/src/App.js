// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Users from './Users';

class App extends Component {
  render() {
    const userArr = [10, 11, 100];
    return (
      <BrowserRouter>
      <Fragment>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users/:farofa" component={Users} />
          <Route path="/users" render={props => 
            <Users {...props} greetingMessage="Good Morning" arrayNew={userArr} />} />
        </Switch>

      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
