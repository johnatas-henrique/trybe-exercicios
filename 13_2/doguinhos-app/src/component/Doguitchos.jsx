import React from 'react';

const API_URL = "https://dog.ceo/api/breeds/image/random";

class Doguitchos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      doguinhoName: '',
      doguinhoArray: [],
    }
  }

  doguinhosFetch = () => {
    fetch(API_URL, { headers: { Accept: "application/json" } })
      .then(response => response.json())
      .then(data => this.guardaDoguinho(data.message))
  }

  passaNome = (event) => {
    this.setState({ doguinhoName: event.target.value });
  }

  guardaDoguinho (fetchRes) {
    const { doguinhoName, doguinhoArray } = this.state;
    let tempArr = [[doguinhoName, fetchRes],];
    /* console.log(tempArr); */
    let objeto = Object.fromEntries(tempArr);
    /* console.log(objeto); */
    doguinhoArray.push(objeto);
    this.setState(() => ({doguinhoName: ''}))
    /* console.log(this.state.doguinhoArray); */
  }

  render () {
    return (
      <div className="borda">
        Nome do doguinho
        <input
          name="doguinhoName"
          type="text"
          value={this.state.doguinhoName}
          onChange={this.passaNome}
          maxLength="40"
        />
        {this.state.doguinhoName !== '' ?
          <button onClick={this.doguinhosFetch}>Buscar doguinho</button> :
          <p>Dê um nome para o doguinho primeiro</p>}
        <ul className="flexy-dog">
          {this.state.doguinhoArray.map(dog => {
            const {chave = Object.keys(dog), valor = Object.values(dog)} = dog;
            /* console.log(chave);
            console.log(valor); */
            return <li className="dogList" key={valor}><img className="w-100" src={valor} alt={chave} /><p>{chave}</p></li>
          })}
        </ul>
      </div>
    );
  }
}

export default Doguitchos;
