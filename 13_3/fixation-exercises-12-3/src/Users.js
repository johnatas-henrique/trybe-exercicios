// arquivo Users.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {

  render () {
    const usuarioID = this.props.match.params.farofa;
    console.log(this.props.match)
    if(usuarioID) return <h1>Usuário {usuarioID} retornado</h1>

    return (
      <div>
        <h2> Users </h2>
        <ul>{this.props.greetingMessage}, lista de usuários abaixo
          {this.props.arrayNew.map(item => {
            return <li key={item}><Link to={`/users/${item}`}>{item}</Link></li>})}
        </ul>
        <p>  </p>
      </div>
    );
  }

}


export default Users;
